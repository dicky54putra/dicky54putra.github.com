import React from 'react'
import './index.scss'
import Fade from 'react-reveal/Fade'

export default function index(props) {
    return (
        <Fade bottom delay={200}>
            <div className="container banner position-relative mt-5">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <h3 className="text-center" style={{ fontSize: 26, fontWeight: 500 }}>{props.title}</h3>
                    <p className="text-center mt-n2" style={{ fontSize: 18, fontWeight: 300, marginInline: "-50px" }}>{props.subTitle}</p>
                </div>
            </div>
        </Fade>
    )
}
