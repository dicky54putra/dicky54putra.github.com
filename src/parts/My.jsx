import React from 'react'
import Fade from 'react-reveal/Fade'

export default function My() {
    return (
        <div className="col text-center my-dicky">
            <div className="position-absolute top-50 start-50 translate-middle">
                <Fade bottom delay={300}>
                    <h1 className="brand m-0">
                        Dicky<span className="brand-end">Saputra</span>
                    </h1>
                </Fade>
                <Fade bottom delay={400}>
                    <p className="m-0 job">Fullstack Web Developer</p>
                </Fade>
                <Fade bottom delay={500}>
                    <p className="m-0 place">Jepara, Indonesia</p>
                </Fade>
            </div>
        </div>
    )
}
