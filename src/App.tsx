import './App.css'
import ButtonSocialMedia from './components/ButtonSocialMedia'
import Button from './components/ButtonSubmit'
import Logo from './assets/Logo.svg'
import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Paragraph from './components/Paragraph'
import { ChakraProvider } from '@chakra-ui/react'
import Form from './components/Form'



function App() {

  return (
    <>
      <ChakraProvider>
        <img src={Logo} alt="logo" />
        <Title>GreenRewardz</Title>
        <Subtitle marcacao={true}>Make world more </Subtitle>
        <Paragraph paragrafo={false}>Insira seu e-mail e senha para continuar</Paragraph>
        <Form></Form>
      </ChakraProvider>

    </>
  )
}

export default App
