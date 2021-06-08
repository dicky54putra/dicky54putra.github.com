import React from 'react'
import Fade from 'react-reveal/Fade'
import myPng from 'assets/images/my-dicky.png'

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

export const My2 = () => {
    return (
        <div className="col-12 text-center my-dicky">
            <div className="position-absolute top-50 start-50 translate-middle">
                <Fade bottom delay={300}>
                    <h1 id="dicky-saputra">
                        Dicky<span className="primary">Saputra</span>
                    </h1>
                    <div className="d-flex mt-n3">
                        <p id="jepara-indonesia">Jepara, Indonesia</p>
                        <p id="fullstack-web-developer">Fullstack Web Developer</p>
                    </div>
                </Fade>
            </div>
            <div className="text-center my-dicky-img">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <img src={myPng} alt="my" srcset="" width="100%" style={{ minWidth: 350 }} />
                </div>
            </div>
        </div>
    )
}
