import React from 'react'
import "./Subject.css"
import Coursebox from './Coursebox'

const Subject = () => {
    return (
        <div className='subjext-box'>

            <div className='data-science-cor-btn'>
                <p>DATA SCIENCE COURSE LEARNING PATH</p>
            </div>
            <div className='data-heading'>
                <h1>Data Science <span>Course Curriculum</span></h1>
            </div>

            <div className='coureses-box'>

                <Coursebox title={"C++"} content={"Learn C++ for strong programming fundamentals."} />
                <Coursebox title={"MERN"} content={"Master the MERN stack for high-demand projects."} />
                <Coursebox title={"Data Structure & Algorithm"} content={"Excel in Data Structures and Algorithms for interview success."} />
                <Coursebox title={"Competitve Programming"} content={"Excel in Data Structures and Algorithms for interview success."} />


            </div>

        </div>
    )
}

export default Subject
