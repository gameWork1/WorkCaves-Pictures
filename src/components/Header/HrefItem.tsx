import { FC } from "react";

type HrefProps = {
    href:string,
    target:string,
    text:string
}

const HrefItem:FC<HrefProps> = (props: HrefProps) => {
    const {href, text} = props
    const target = props.target != null && props.target != "" ? props.target : "_self";

    return (
        <>
            <a style={{textDecorationLine: "none", color: "white"}} target={target} href={href}>{text}</a>
        </>
    )
}

export default HrefItem;