import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom"
import AboutMe from "./pages/AboutMe"

//TODO:
// GLOBAL TODOS:
// [] somehow make the pages look retro / anolog
//  [] cardstock-y componants think vintage fujifilm pictures with minimal colour correct
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
      <NavBar/>
      <div className="sm:pl-64">
        <Routes>
          <Route path="/" element={<AboutMe/>}/>
          <Route path="/aboutMe" element={<AboutMe/>}/>
        </Routes>
      </div>

    </div>
  )
}

