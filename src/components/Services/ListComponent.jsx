import React from 'react'
import { Link } from "react-router-dom"

function ListComponent({imageUrl,heading,content,linkUrl}) {
    return (
        <div className="services-page3-list-item">
            <div className="services-page3-list-item-img-wrap">
                <img src={imageUrl} alt="" />
            </div>

            <div className="services-page3-list-item-content">
                <h3>
                    {heading}
                </h3>

                <p>
                    {content}
                </p>

                {/* <span>
                    <Link to={linkUrl}>
                        Learn More
                    </Link>
                </span> */}
            </div>
        </div>
    )
}

export default ListComponent