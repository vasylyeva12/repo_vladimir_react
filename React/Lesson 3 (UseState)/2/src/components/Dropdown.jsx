import React from 'react'

const Dropdown = ({ labels }) => {
    return (
        <div className="dropdown">
            <div className="dropdown__label">{labels[0].label}</div>
            <div className="dropdown__content">
                <ul>
                    {
                        labels && labels.map(item => (
                            <li key={item.id}>{item.label}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Dropdown