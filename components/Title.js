import React from 'react'

export default function Title(props) {
    return (
        <div className="container-d section-title-container">
            <h3 className="section-title section-title-center">
                <b></b>
                <span className="section-title-center">{props.title}</span>
                <b></b>
            </h3>
        </div>
    )
}
