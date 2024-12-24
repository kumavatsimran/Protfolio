import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Navbar from './component/Navbar.jsx';
// import Skill from './component/Skill/skill.jsx';
import Home from './component/Home/Home.jsx';
import About from './component/About/About.jsx';
import Project from './component/Project/Project.jsx';
import Contect from './component/Contect/Contect.jsx';
import Skill from './component/Skill/Skill.jsx';

createRoot(document.getElementById('root')).render(
  <>
  <Navbar/>
  <main  className=''>
    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <Contect/>

  </main>
  </>
)
