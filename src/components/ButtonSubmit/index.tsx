import './button.css'

interface ButtonProps {
    children: React.ReactNode,
    submit: boolean
}

const ButtonSubmit = ({ children, submit }: ButtonProps): JSX.Element => {
    return (
        <>
        {submit ?
        <button type='submit' className='btn'>{children}</button>
        :
        <button type='button' className='btn'>{children}</button>
        }
            
        </>
    );
}

export default ButtonSubmit;