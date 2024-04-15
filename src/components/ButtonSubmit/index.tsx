import './button.css'

interface ButtonProps {
    children: React.ReactNode,
}

const ButtonSubmit = ({ children }: ButtonProps): JSX.Element => {
    return (
        <>
            <button type='submit' className='btn'>{children}</button>
        </>
    );
}

export default ButtonSubmit;