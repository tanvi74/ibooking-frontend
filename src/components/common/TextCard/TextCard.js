import React from 'react';
import './TextCard.css';

export default function TextCard({heading, description, className, descClass}) {
    return (
        <div className={className ? className : ''}>
            <h2 className={`sub-head-title mb-3 ${className ? className : ''}`}>
                {heading}
            </h2>
            <div className={`desc ${descClass ? descClass : ''} `}>
                {description}
            </div>
        </div>
    )
}
