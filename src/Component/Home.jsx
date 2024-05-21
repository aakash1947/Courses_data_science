import React from 'react'
import './Home.css';
import CourceNav from './CourceNav';
import { MdComputer } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";
import { VscCommentUnresolved } from "react-icons/vsc";
import { GrProjects } from "react-icons/gr";

const Home = () => {
    return (
        <div>
            <body>
                <div>
                    <div className="first-nav">
                        <h2>Logo</h2>
                        <div className="btn-login-signup">
                            <p>Login</p>
                            <button>Signup</button>
                        </div>
                    </div>

                    <div className="second-navbar">
                        <p>Overview</p>
                        <p>Curriculum</p>
                        <p>Refund</p>
                        <p>Testimonials</p>

                    </div>

                    <div className="main-section">
                        <div className="main-button">
                            <i className="fa-solid fa-graduation-cap"></i>
                            <p>An <span>IIT DELHI</span> Alimni Inotoative</p>
                        </div>

                        <div className="heading-section">
                            <h1>
                                Become an Expert in the field of <span>Data Science with 6 Cources</span>
                            </h1>
                            <p>A Spacial Craft Tech Kickstarter, with 5+ extensive online courses</p>
                        </div>

                        <div className="Mentorship-btn">

                            <p>Personal Mentorship</p>
                            <p>Internship Assistance</p>
                            <p>Industry Certified Courses</p>
                        </div>

                        <div className="enroll-btn">
                            <button>Enroll Now</button>
                            <p>Know More ?</p>
                        </div>


                    </div>

                    <div className='Cources-detals' style={{

                        display: 'flex',
                        width: " 1440px",
                        height: "172px"
                    }}>


                        <CourceNav number={24} text={"courses"} icons={<MdComputer />} />
                        <CourceNav number={"30K+"} text={"Leraners"} icons={<FaUserGraduate />} />
                        <CourceNav number={"100K+"} text={"Doubts Solve"} icons={< VscCommentUnresolved />} />
                        <CourceNav number={"10K+"} text={"Students Project"} icons={<GrProjects />} />


                    </div>
                </div>
            </body>
        </div>
    )
}

export default Home
