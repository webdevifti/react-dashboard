import React from 'react'
import './badge.css'

const Badge = props => {
    console.log(props.type);
    return (
        <span className={`badge badge-${props.type}`}>
            {props.content}
        </span>
    )
}

export default Badge
