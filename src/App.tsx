import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom"
import AboutMe from "./pages/AboutMe"
import ContactMe from "./pages/ContactMe"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
//TODO:
// GLOBAL TODOS:
// [] somehow make the pages look retro / anolog
//  [] cardstock-y components think vintage fujifilm pictures with minimal colour correct
//  [] add personality
// ------------------------------------------
// [] add vim motions to the pages 
// [] parallax the images as the user scroll down 
// [] Finish making the pages
//  [] homepage
//  [] projects page
//  [] hobbies page
//  [] any other page I think to make

export default function App() {

  return (
    <div>
      <NavBar />
      <div className="sm:pl-64">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/contactMe" element={<ContactMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>

    </div>
  )
}

