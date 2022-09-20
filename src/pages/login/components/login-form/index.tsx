import { Form, Input, Button, message } from 'antd'
import useHttp from '../../../../hooks/http'
import { useNavigate } from 'react-router-dom'

import type { ReactElement } from 'react'
import type { ResponseEntity } from '@/entity/commonEntity'
import type { LoginFormEntity } from '@/entity/loginEntity'

import './index.less'
const Api_Url = '/api/web/user/doLogin'

const LoginForm = (): ReactElement => {
    const { Post } = useHttp()
    const navigate = useNavigate()

    const onFinish = (values: LoginFormEntity): void => {
        Post(Api_Url, values).then((res: ResponseEntity) => {
            const { code, data, msg } = res
            if (code === 200) {
                Array.isArray(data) && window.localStorage.setItem('SESSIONID', data[0])
                navigate('/system/user')
            } else {
                message.error(msg)
            }
        })
    }

    const onFinishFailed = (errorInfo: any): void => {
        console.error(errorInfo, 'error-number-1')
    }

    return (
        <Form
            name="login"
            className="login-form"
            labelCol={{
                span: 8
            }}
            wrapperCol={{
                span: 16
            }}
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="用户名"
                name="name"
                rules={[
                    {
                        required: true,
                        message: '请输入你的用户名'
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入密码'
                    }
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16
                }}
            >
                <Button type="primary" htmlType="submit" block>
                    登录
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
