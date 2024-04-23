import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout"
import Home from "./Home"
import Detalles from "./Detalles"
import NotFound from "./NotFound"

const API_URL = 'https://localhost:3000/api/peliculas'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="detalles/:id" element={<Detalles />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
export { API_URL }