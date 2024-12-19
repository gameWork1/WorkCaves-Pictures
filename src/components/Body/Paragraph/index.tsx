import { Typography } from "@mui/material"
import { FC } from "react"
import './style.css'

type ParagraphProps = {
    title?: string,
    text: string
}

const Paragraph:FC<ParagraphProps> = ({title = "О компании", text=""}) =>{
    return(
        <div className="paragraph">
            <Typography variant="h3" fontFamily={'inherit'}>{title}</Typography>
            <div className="content">
                <Typography variant="h5" fontFamily={'inherit'}>{text}</Typography>
            </div>
        </div>
        
    )
}

export default Paragraph;