import AllPiccas from "./main/allItems";
import { Routes, Route } from "react-router-dom";
import SingleItem from "./main/singleItem";
import { Helmet } from "react-helmet";

export default function App() {
    return (
        <div className="grid place-items-center">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My picca title</title>
            </Helmet>
            <Routes>
                <Route path={"/"} element={<AllPiccas />} />
                <Route path={"/:id"} element={<SingleItem />} />
            </Routes>
        </div>
    )
}