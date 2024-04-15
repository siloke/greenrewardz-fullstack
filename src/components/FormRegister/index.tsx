// import './input.css'
import { InputGroup, Input, InputLeftElement, InputRightElement, Button, Select, Stack } from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import ButtonSubmit from '../ButtonSubmit'
import ButtonSocialMedia from '../ButtonSocialMedia'
import { useState } from 'react'

interface ResponseToken {
    token: string,
}

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
            },
            method: "POST",
            body: JSON.stringify(data)
        }

        fetch("https://backend-greenrewardz.onrender.com/auth/register", config)
            .then((response) => {
                return response.json()
            })
            .then((token: ResponseToken) => {
                console.log(token)
            })
            .catch((err: Error) => {
                alert("Algo deu errado!")
            })

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
                    <option value='option2'>Usuario</option>
                </Select>
                </Stack>
                <a href="/login">Ja possui uma conta?</a>
                <ButtonSubmit submit={true}>Registrar-se</ButtonSubmit>
                <ButtonSocialMedia icon={true}>Entrar com Google</ButtonSocialMedia>
                <ButtonSocialMedia icon={false}>Entrar com Facebook</ButtonSocialMedia>
            </form>
        </>
    );
}

export default FormRegister;
