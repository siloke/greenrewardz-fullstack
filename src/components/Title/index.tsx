import './title.css'

interface TitleProps {
    children: React.ReactNode,
}

const Title = ({children}: TitleProps): JSX.Element => {

    return (
        <>
        <p className='title'>{children}</p>
        </>
    );
}

export default Title;