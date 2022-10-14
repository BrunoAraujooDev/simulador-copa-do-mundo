import { Route, Routes } from "react-router-dom";
import { PlayoffComponent } from "./view/PlayoffsStage";
import { StartSimulation } from "./components/StartSimulation";
import { Groups } from "./view/Groups";
import { Home } from "./view/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/" element={<StartSimulation />} />
                <Route path="/groups" element={<Groups />} />
                <Route path="/playoffs" element={<PlayoffComponent />} />
            </Route>
        </Routes>
    )
}

