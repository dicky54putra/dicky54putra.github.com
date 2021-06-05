import React from 'react'

import Button from 'elements/Button'
import Fade from 'react-reveal/Fade'

export default function Menu() {
    return (
        <Fade top delay={300}>
            <div className="col-1">
                <div className=" menu">
                    <Button type="link" href="/about" className="text-menu">About</Button>
                    <Button type="link" href="/portofolio" className="text-menu">Portofolio</Button>
                    <Button type="link" href="/resume" className="text-menu">Resume</Button>
                    <Button type="link" href="https://medium.com/@dicky54putra" isExternal target="_blank" className="text-menu">Blog</Button>
                </div>
            </div >
        </Fade>
    )
}
