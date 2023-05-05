import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom"
import "./App.css"
import Header from './Section/Header/Header'
import Container from './components/Container/Container'
import Footer from './Section/Footer/Footer'

import Home from "./Pages/Home/Home"
import Profile from "./Pages/Profile/Profile"
import Browse from "./Pages/Browse/Browse"
import Details from "./Pages/Details/Details"
import Stream from "./Pages/Stream/Stream"

const App = () => {
    return (
        <>
        <Router Location={useLocation}>
            <Header/>
            <Container>
                <Routes >
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/browse" element={<Browse/>}/>
                    <Route path="/details" element={<Details/>}/>
                    <Route path="/stream" element={<Stream/>}/>
                </Routes>
            </Container>
            <Footer/>
        </Router>
    </>
    )
}

export default App
