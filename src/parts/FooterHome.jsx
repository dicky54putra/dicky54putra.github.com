import React from 'react'
import Fade from 'react-reveal/Fade'

export default function FooterHome() {
    return (
        <Fade bottom>
            <footer style={{ paddingTop: '6rem' }}>
                <div className="footer">
                    <p style={{ fontWeight: 500, fontSize: 14 }}>Made with ❤ by <span className="primary">Dicky Saputra</span></p>
                </div>
            </footer>
        </Fade>
    )
}
