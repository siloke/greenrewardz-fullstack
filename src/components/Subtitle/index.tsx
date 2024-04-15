import './subtitle.css'

interface SubtitleProps {
    children: React.ReactNode,
    marcacao: boolean,
}

const Subtitle = ({ children, marcacao }: SubtitleProps): JSX.Element => {

    return (
        <>
            <div className='box-subtitle'>
                <p className='subtitle'>{children}</p>
                {marcacao ?
                    <div className='submarcacao'>
                        GREEN
                    </div>
                    :
                    <span></span>
                }

            </div>
        </>
    );
}

export default Subtitle;