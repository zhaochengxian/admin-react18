import { ReactElement } from 'react'
import { Row } from 'antd'
import Form from './components/login-form'

import Image from '@/components/Image'
import LOGO from '@/assets/logo_.png'
import SIGN_IN from '@/assets/signin.svg'
import SIGN_UP from '@/assets/signup.svg'

import './index.less'

const Login = (): ReactElement => {
    return (
        <Row className="login-page">
            <Row className="login-form-wrapper">
                <Image src={LOGO} className="logo" />
                <Image src={SIGN_IN} className="sign-in" />
                <Image src={SIGN_UP} className="login-right-img" />

                <Form />
            </Row>
        </Row>
    )
}

export default Login
