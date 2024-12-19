import { Card, CardContent, Typography, Button } from "@mui/material"
import { FC } from "react"
import './style.css'
import HrefItem from "../../../Header/HrefItem"

type ProjectCardProps = {
    href?: string,
    text: string,
    title: string
}

const ProjectCard:FC<ProjectCardProps> = ( {href, text, title} ) => {

    return(
        <Card
        sx={{
        minWidth: 275,
        height: 250,
        marginRight: 2,
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#ffffff",
        boxShadow: 2,
        }}
    >
        <CardContent>
            <div className="info">
                <Typography fontFamily="inherit" variant="h5" style={{marginRight: "10px"}}>{title}</Typography>
                {href&&
                    <Button style={{
                    backgroundColor: "#2fad2f",
                    color: "#ffff",
                    minWidth: "115px",
                    height: "35px"
                    }}><HrefItem target="_blank" text="Подробнее" href={href}/></Button>
                }
                {
                    !href&&
                    <Button style={{
                        backgroundColor: "#b50716",
                        color: "#ffff",
                        minWidth: "115px",
                        height: "35px"
                        }}><Typography style={{fontSize: "15px"}}>Недоступно</Typography></Button>
                }
                
            </div>
            
            <div className="content">
                <Typography fontFamily="inherit" variant="h6">{text}</Typography>
            </div>
            
        </CardContent>
    </Card>
    )
}

export default ProjectCard;