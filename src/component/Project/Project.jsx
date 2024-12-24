import React from 'react';
import "../Project/Project.css"
import { FaGithub } from "react-icons/fa";

function Project() {
    const projects = [
        
          {
            id: 1,
            name: "Furnniture",
            img: "/assete/image/furnni.jpeg",
            description: "Responsive website with all curd opretion.Add functionlity like total ,subtotal,increment ,decrement,",
            git:"https://github.com/kumavatsimran/react-Furni.git",
            link:"https://react-furni.onrender.com"
          },
          {
            id: 2,
            name: "Login auth",
            img: "/assete/image/auth.jpeg",
            description: "This project is a React-based authentication system integrated with Firebase Authentication and includes CRUD operations for managing user data. ",
            git:"https://github.com/kumavatsimran/react-firebaceAuth.git",
            link:"https://firebace-auth.onrender.com"
          },
        {
          id: 3,
          name: "Add to cart",
          img: "/assete/image/Screenshot (23).png",
          description: " A React and Axios-based product listing app featuring search, sorting, and an Add to Cart functionality. Products are displayed in a dynamic table with images, prices, and actions, fetching data via Axios from a backend or JSON server. The UI updates seamlessly without page reloads.",
          git:"https://github.com/kumavatsimran/axiosCrud-react.git",
          link:"axioscrud-react-l1kv.onrender.com"
        },
        {
          id: 6,
          name: "Feedback-form ",
          img: "/assete/image/Screenshot (31).png",
          description: "This React-based feedback form enables users to submit their comments, with real-time validation,rate and dynamic updates enhancing the user experience.",
          git:"https://github.com/kumavatsimran/Bootstrap.git",
          link:"https://bootstrap-5zcs.onrender.com"
        },
        {
          id: 6,
          name: "Blog ",
          img: "/assete/image/Screenshot (34).png",
          description: "This React-based blog Project .which have login logout using passport . dynamic updates enhancing the user experience.",
          git:"https://github.com/kumavatsimran/Blogpassport.git",
          link:"https://blog-passport-qv72.onrender.com"
        },
        {
          id: 4,
          name: "Movie webstite",
          img: "/assete/image/Screenshot (26).png",
          description: "This project is a Node.js-based movie website designed for browsing, adding, editing, and deleting movie entries, showcasing a modern and user-friendly interface.",
          git:"https://github.com/kumavatsimran/movie.git",
          link:"https://movie-os5w.onrender.com/"
        },
        {
          id: 5,
          name: "Weather ",
          img: "/assete/image/Screenshot (33).png",
          description: "This weather app lets users select a country, state, and city to fetch real-time weather data using JavaScript and the fetch API. It displays the temperature, weather conditions, and humidity based on the chosen location.",
          git:"https://github.com/kumavatsimran/wether-web.git"
        },
        {
          id: 6,
          name: "Bank ",
          img: "/assete/image/Screenshot (32).png",
          description: "This JavaScript bank system lets users deposit money and manage credit limits, updating their account balance and available credit.",
          git:"https://github.com/kumavatsimran/Js-Bank.git"
        },
      ];
      
  return (
    <>
      
 <section id="projects" className="  ">
  <div className="container pt-5">
  <h2 className="text-center mb-4 text-white">My Projects</h2>
      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4">
            <div className="card h-100 shadow-lg border-0">
              <div className="card-image">
                <img
                  src={project.img}
                  alt={project.name}
                  className="card-img img-fluid"
                />
                <div className="card-hover">
                  <h5>{project.name}</h5>
                  <p>{project.description}</p>
                  <a href={project.git}> <FaGithub /></a>
                  <a
  className="btn3"
  href={project.link}
  target="_parent"
  rel="noopener noreferrer"
>
  Check Now
</a>
                 

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  </div>
     
    </section>
    



    </>
  );
}

export default Project;
