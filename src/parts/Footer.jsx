import Button from 'elements/Button'
import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Footer(props) {
    const classFooter = props.isHome ? "position-relative" : ""
    return (
        <Fade bottom>
            <footer style={{ paddingTop: '6rem' }} className={classFooter}>
                <div className="footer">
                    {props.isHome && (
                        <div className="d-flex justify-content-center">
                            <Button type="link" href="/about" className="text-menu">About</Button>
                            <Button type="link" href="/portofolio" className="text-menu">Portofolio</Button>
                            <Button type="link" href="/resume" className="text-menu">Resume</Button>
                            <Button type="link" href="https://medium.com/@dicky54putra" isExternal target="_blank" className="text-menu">Blog</Button>
                        </div>
                    )}
                    <p style={{ fontWeight: 500, fontSize: 14 }}>Made with ❤ by <span className="primary">Dicky Saputra</span></p>
                </div>
            </footer>
        </Fade>
    )
}
