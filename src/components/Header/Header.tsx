import { FC } from "react";
import HrefItem from "./HrefItem";
import './Header.css'
import { Button } from "@mui/material";

const Header:FC = () => {
    return (
        <header>
            <ul>
                <li><Button color='error'><HrefItem target="_blank" text="GITHUB" href="https://github.com/gameWork1"/></Button></li>
                <li><Button color='error'><HrefItem target="_blank" text="Donate" href="https://www.donationalerts.com/r/workcavespictures"/></Button></li>
                <li><Button color='error'><HrefItem target="_blank" text="Portfolio" href="https://t.me/+nRg3RlICw9piYjM6"/></Button></li>
                <li><Button color='error'><HrefItem target="_blank" text="Contact" href="https://kwork.ru/user/workcave"/></Button></li>
            </ul>
        </header>
    );
}

export default Header;