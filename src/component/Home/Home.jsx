import React from 'react';
import { FaGithub } from "react-icons/fa";
import '../Home/Home.css'

function Home() {
  return (
    <>
    <section className="container-fluid p-5" id="home">
  <div className="container mt-5">
    <div className="row  justify-content-center align-items-center">
      <div className="col-md-6   ">
        <div className="detail text-white mt-5">
       
          <h4 className=" mt-3 display-4 text-start">HEY! I'M <span className='name'>Simran </span></h4>
          <p className="display-4 fs-2 text-start">I'M A <span id="changingText">FULLSTACK-DEVELOPER</span></p>
          <p className="mt-4 fs-4 pt-2 text-start"> 
            A passionate Full-Stack Developer specializing in creating dynamic, responsive,
            and user-friendly web applications. Let's build something amazing together!</p>
          <div className="d-flex flex-wrap mt-4 align-items-center  mb-3">
            <a className=" p-2  rounded-pill   border  btn2" href="#projects">PROJECT</a>
            
            <a href="https://github.com/kumavatsimran" className=' fs-4 ms-3 icon  '  target='_parent'><FaGithub /></a>
          </div>
        </div>
      </div>
      <div className="col-md-6 mt-5   p-5">
        <div className="  rounded-circle  ">
          <img src="/assete/image/sim1.jpeg" className="girle  border  rounded-circle d-flex justify-content-center " /> 
        </div>
        {/* <div className="position-relative">
          <img src="asset/image/effect-3.svg" className=" dot position-absolute w-15  top-0 start-100 translate-middle" />
        </div> */}
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default Home;
