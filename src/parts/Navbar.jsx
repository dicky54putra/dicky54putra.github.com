import React from 'react'

import Button from 'elements/Button'
import Breadcrumb from 'elements/Breadcrumb'
import Fade from 'react-reveal/Fade'

export default function Navbar({ breadcrumb }) {
    return (
        <header className="spacing-cm" >
            <div className="container">
                <Fade left>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Button className="brand mx-auto" href="/" type="link">
                        Dicky <span className="brand-end">Saputra</span>
                    </Button>
                </nav>
                </Fade>
                <Fade right>
                <div className="mt-3">
                    <Breadcrumb data={breadcrumb} className="breadcrumb"></Breadcrumb>
                </div>
                </Fade>
            </div>
        </header >
    )
}
