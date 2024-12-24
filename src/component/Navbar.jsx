import React from "react";

const Navbar = () => {


  return (
    <>
    <div className="bg-black container-fluid position-fixed top-0 position-absolute z-3 mt-0">
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav d-flex justify-content-center align-items-center mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#home">Home me</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#about">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#projects">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#skill">Skill</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>

    </>
  );
};

export default Navbar;
