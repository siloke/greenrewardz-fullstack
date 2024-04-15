import '../../index.css'
import { ChakraProvider } from "@chakra-ui/react";

import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import Paragraph from "../../components/Paragraph";
import Logo from '../../assets/Logo.svg'
import FormRegister from "../../components/FormRegister";
import LeftBackground from "../../assets/left-background.png";

const Register = (): JSX.Element => {
    return (
        <>
        <ChakraProvider>
        <div className="box">
        <img src={LeftBackground} alt='fundo' className='left-background' />
            <div className='form-box'>
                <div className='form-itens'>
            <img src={Logo} alt="logo" />
            <Title>GreenRewardz</Title>
            <Subtitle marcacao={true}>Make world more </Subtitle>
            <Paragraph paragrafo={false}>Insira seus dados para</Paragraph>
            <FormRegister></FormRegister>
            </div>
            </div>
        </div>
        </ChakraProvider>
        </>
    )
}

export default Register;