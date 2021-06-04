import React from 'react'

import propTypes from 'prop-types';
import Button from 'elements/Button';

import './index.scss'

export default function Breadcrumb(props) {
    const className = [props.className]
    return (
        <nav aria-label="breadcrumb" className="position-relative">
            <div className="position-absolute top-0 start-50 translate-middle">
                <ol className={className.join(" ")}>
                    {props.data.map((item, index) => {
                        return (
                            <li key={`breadcrumb-${index}`} className={`breadcrumb-item${index === props.data.length - 1 ? " active" : ""}`}>
                                {index === props.data.length - 1 ? (item.pageTitle) : (<Button type="link" href={item.pageHref}>{item.pageTitle}</Button>)}
                            </li>
                        )
                    })}
                </ol>
            </div>
        </nav>
    )
}

Breadcrumb.propTypes = {
    data: propTypes.array,
    className: propTypes.string
}
