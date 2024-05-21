import React from 'react'
import { FaRegEye } from "react-icons/fa";
import "./Coursebox.css"
const Coursebox = (props) => {
    return (
        <div>
            <div className='Courses'>
                <div className='courses-box2' >
                    <p>{props.title}</p>
                    <div className='courses-box3'>
                        <p>{props.content}</p>
                    </div>

                </div>


                <div className='Curriculum-btn'>
                    <p> <FaRegEye /></p>
                    <p>View Curriculum</p>
                </div>
            </div>
        </div>
    )
}

export default Coursebox
