import './ButtonSocialMedia.css'
import GoogleIcon from '../../assets/flat-color-icons_google.svg'
import FacebookIcon from '../../assets/logos_facebook.svg'

interface ButtonProps {
    children: React.ReactNode,
    icon: boolean
}

const ButtonSocialMedia = (props: ButtonProps): JSX.Element => {

    return (
        <button className='btnMedia'>
            {props.icon ? <img className='socialMediaIcon' src={GoogleIcon} /> : <img className='socialMediaIcon' src={FacebookIcon} />}
            {props.children}
        </button>
    );
}

export default ButtonSocialMedia;