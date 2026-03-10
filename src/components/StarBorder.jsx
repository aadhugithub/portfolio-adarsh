import React from 'react';
import './StarBorder.css';

const StarBorder = ({
    as: ComponentTag = 'button',
    className = '',
    color = 'white',
    speed = '6s',
    children,
    ...rest
}) => {
    return (
        <ComponentTag className={`star-border-container ${className}`} {...rest}>
            <div
                className="border-gradient-bottom"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div
                className="border-gradient-top"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div className="inner-content">{children}</div>
        </ComponentTag>
    );
};

export default StarBorder;
