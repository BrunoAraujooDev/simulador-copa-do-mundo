import { Route, Routes } from "react-router-dom";
import { Home } from "./view/Home";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}