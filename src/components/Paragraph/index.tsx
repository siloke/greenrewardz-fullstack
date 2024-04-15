import './paragraph.css'

interface ParagraphProps {
    children: React.ReactNode,
    paragrafo: boolean,
}

const Paragraph = ({ children, paragrafo }: ParagraphProps): JSX.Element => {

    return (
        <>
            {paragrafo ? <p className="black">{children}</p>
                :
                <p className="green">{children}</p>}

        
        </>
    );
}

export default Paragraph;