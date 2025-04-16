import React from 'react'
import "./Page4C2.css"
import robo from "../../../../assets/c1.png"
import { Link } from 'react-router-dom'

function Page4C2({image1,image2,heading,para}) {
    return (
        <div className='pg4-c2-wrapper'>
            <div className='pg-c2-mid'>
                <img className='pg-c2-img' src={image1} alt="" />
            </div>

            <div className='pg4-c2'>
                <h1 className='pg4-c2-heading'>{heading}</h1>
                <p className='pg4-c2-para'>{para}</p>
                <Link className='pg4-c2-link'>Learn More</Link>
            </div>

            <div className='pg-c2-mid'>
                <img className='pg-c2-img' src={image2} alt="" />
            </div>
        </div>
    )
}

export default Page4C2