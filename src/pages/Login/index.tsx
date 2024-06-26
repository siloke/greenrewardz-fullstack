import '../../index.css'

import { ChakraProvider } from "@chakra-ui/react";

import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import Paragraph from "../../components/Paragraph";
import Form from "../../components/Form";
import Logo from '../../assets/Logo.svg'


const Login = (): JSX.Element => {
    return (
        <>
            <ChakraProvider>
                <div className="box">
                    <div className='left-background'></div>
                    <div className='form-box'>
                        <div className='form-itens'>
                            <img src={Logo} alt="logo" />
                            <Title>GreenRewardz</Title>
                            <Subtitle marcacao={true}>Make world more </Subtitle>
                            <div className="margin"></div>
                            <Paragraph paragrafo={false}>Insira seu e-mail e senha para continuar</Paragraph>
                            <Form></Form>
                        </div>
                    </div>
                </div>
            </ChakraProvider>
        </>
    )
}

export default Login;