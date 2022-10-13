import { Header } from "../../components/Header";
import { Outlet } from 'react-router-dom';
import { HomeContainer } from "./style";

export function Home(){
    return (
        <HomeContainer>
            <Header/>
            <Outlet />
        </HomeContainer>
    )
}