import { Route, Routes } from "react-router-dom/dist"
import Page1 from "../components/Page1"
import Page2 from "../components/Page2"
import Page4 from "../components/Page1"
import Home from "../components/Home"

export const Router = () => {
    return (
        <Routes>
              <Route  path="/" element={<Home/>}/>
              <Route  path="/page1" element={<Page1 />}/>
              <Route  path="/page2" element={<Page2 />}/>
        </Routes>
    )
}