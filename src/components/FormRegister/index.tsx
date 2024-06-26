
import { InputGroup, Input, InputLeftElement, InputRightElement, Button, Select, Stack } from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import ButtonSubmit from '../ButtonSubmit'
import ButtonSocialMedia from '../ButtonSocialMedia'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Paragraph from '../Paragraph'


const FormRegister = (): JSX.Element => {

    const [show, setShow] = useState<boolean>(false)
    const [emailText, setEmailText] = useState<string>("")
    const [passwordText, setPasswordText] = useState<string>("")
    const [permissionText, setPermissionText] = useState<string>("")

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmailText(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPasswordText(event.target.value)
    }

    const handlePermissionChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPermissionText(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {

        event.preventDefault()

        const data = {
            "login": emailText,
            "password": passwordText,
            "role": permissionText
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            method: "POST",
            body: JSON.stringify(data)
        }

        fetch("https://backend-greenrewardz.onrender.com/auth/register", config)
            .then((response) => {
                return response.text()
            })
            .then((data) => {
                alert(data)
            })
            .catch((err: Error) => {
                console.error(err)
            })

        setEmailText("")
        setPasswordText("")

    }

    const handleClick = (): void => {
        setShow(!show)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <EmailIcon color='gray.300' />
                    </InputLeftElement>
                    <Input
                        value={emailText}
                        onChange={handleEmailChange}
                        focusBorderColor='gray.300'
                        type='email'
                        placeholder='Email' />
                </InputGroup>
                <InputGroup size='md'>
                    <InputLeftElement pointerEvents='none'>
                        <LockIcon color='gray.300' />
                    </InputLeftElement>
                    <Input
                        value={passwordText}
                        onChange={handlePasswordChange}
                        focusBorderColor='gray.300'
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Stack spacing={3} onChange={handlePermissionChange}>
                    <Select placeholder='Selecionar Permissão'>
                        <option value='ADMIN'>Admin</option>
                        <option value='USER'>Usuario</option>
                    </Select>
                </Stack>
                <ButtonSubmit submit={true}>Registrar-se</ButtonSubmit>
                <div className="margin"></div>
                <ButtonSocialMedia icon={true}>Entrar com Google</ButtonSocialMedia>
                <ButtonSocialMedia icon={false}>Entrar com Facebook</ButtonSocialMedia>
                <Paragraph paragrafo={true}>Já tem uma conta? <Link to="/">Entre</Link></Paragraph>
            </form>
        </>
    );
}

export default FormRegister;

