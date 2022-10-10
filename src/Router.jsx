import { Route, Routes } from "react-router-dom";
import { StartSimulation } from "./components/StartSimulation";
import { Groups } from "./view/Groups";
import { Home } from "./view/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/" element={<StartSimulation />} />
                <Route path="/groups" element={<Groups />} />
            </Route>
        </Routes>
    )
}

