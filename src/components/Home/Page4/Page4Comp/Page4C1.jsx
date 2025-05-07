import React from 'react'
import "./Page4C1.css"
import {Link} from "react-router-dom"

function Page4C1({head1,head2,para1,para2,image}) {
    return (
        <div className='pg4-c1-wrapper'>
            <div className='pg4-c1'>
                <h1 className='pg4-c1-heading'>{head1}</h1>
                <p className='pg4-c1-para'>{para1}</p>
                <Link className='pg4-c1-link'>Learn More</Link>
            </div>

            <div className='pg-c1-mid'>
                <img className='pg-c1-img' src={image} alt="" />
            </div>

            <div className='pg4-c1'>
                <h1 className='pg4-c1-heading'>{head2}</h1>
                <p className='pg4-c1-para'>{para2}</p>
                {/* <Link className='pg4-c1-link'>Learn More</Link> */}
            </div>
        </div>
    )
}

export default Page4C1