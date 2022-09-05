import { message } from 'antd'
import { reject } from 'q'
import { useDispatch } from 'react-redux'
import { removeEmptyParams } from '@/utils/hooks'

import { loadingOver, loadingStart } from '../../store/actions/loading'

const useHttp = () => {
    message.config({
        maxCount: 1
    })

    const baseUrl = './src'

    const dispatch = useDispatch()

    const serialize = (arg: any) =>
        Object.keys(arg)
            .map(item => {
                if (arg[item] !== '') {
                    return `${item}=${arg[item]}`
                }
                return ''
            })
            .filter(e => e)
            .join('&')
    const Judge = (response: any, self: boolean): void => {
        if (self) {
            if (response.code === 200) {
                return response.data
            }
            if (response.code === 661) {
                return reject(response.msg)
            }
            if ([208, 401].includes(response.code)) {
                if (window.location.pathname !== '/') {
                    window.location.href = '/'
                }
                window.sessionStorage.clear()
                message.error({ content: response.msg })
                return reject(response.msg)
            } else {
                message.error(response.msg)
                return reject(response.msg)
            }
        } else {
            const captchakey = response.headers.get('captchakey')
            if (captchakey) {
                window.sessionStorage.setItem('captchakey', captchakey)
            }
            return response
        }
    }
    const Post = (url: string, arg: object | string, loading?: boolean): Promise<any> => {
        loading && dispatch(loadingStart())
        return fetch(baseUrl + url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json; charset=utf-8',
                Authorization: window.localStorage.getItem('SESSIONID') || '',
                'Set-Cookie': 'cookiename=httponlyTest;Path=/;Domain=domainvalue;Max-Age=seconds;HTTPOnly'
            },
            body: removeEmptyParams(arg)
        })
            .then(res => res.json())
            .then(temp => {
                setTimeout(() => {
                    loading && dispatch(loadingOver())
                }, 500)
                return Judge(temp, true)
            })
            .catch(res => {
                setTimeout(() => {
                    loading && dispatch(loadingOver())
                }, 500)
                if (res && res.toString().indexOf('NetworkError when attempting to fetch resource') !== -1) {
                    window.sessionStorage.clear()
                    window.location.href = '/'
                }
                return reject(res)
            })
    }

    const Get = (url: string, arg: object, loading?: boolean): Promise<any> => {
        loading && dispatch(loadingStart())
        return fetch(`${baseUrl + url}?${serialize(arg)}`, {
            method: 'GET',
            headers: {
                Authorization: window.localStorage.getItem('SESSIONID') || ''
            }
        })
            .then(res => res.json())
            .then(temp => {
                setTimeout(() => {
                    loading && dispatch(loadingOver())
                }, 500)
                return Judge(temp, true)
            })
    }

    return { Post, Get, Judge }
}

export default useHttp
