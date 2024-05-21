import React from 'react'
import './CourceNav.css'
import { MdComputer } from "react-icons/md";
const CourceNav = (props) => {
    return (
        <div>
            <div className="courses-section">

                <div className="All-boxes">
                    <div className="courses-section-box">
                        <div className="courses-section-icon">
                            <p>{props.icons}</p>
                        </div>


                        <div className="courses-section-icon-2">
                            <h2>{props.number}</h2>
                            <p>{props.text}</p>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default CourceNav
