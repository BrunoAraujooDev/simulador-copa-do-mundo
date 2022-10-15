import { House } from "phosphor-react";
import { Link } from "react-router-dom";
import { TituloStyle, HeaderStyle } from "./style";

export function Header (){
    return (
        <HeaderStyle>
            <Link to='/'>
                <House size={32} weight="fill" />
            </Link>
            <TituloStyle>Simulador da Copa do Mundo 2022</TituloStyle>
        </HeaderStyle>
    )
}