import React from 'react'

import Button from 'elements/Button'
import Fade from 'react-reveal/Fade'

import IcGithub from 'assets/images/ic_github.png'
import IcLinkedin from 'assets/images/ic_linkedin.png'
import IcEmail from 'assets/images/ic_email.png'
import IcInstagram from 'assets/images/ic_instagram.png'

export default function SocialIcon() {
    return (
        <Fade bottom delay={300}>
            <div className="col-1">
                <div className="d-flex flex-column position-fixed">
                    <Button type="link" isExternal target="_blank" className="mt-2" href="http://github.com/dicky54putra">
                        <img src={IcGithub} alt="icon github" className="icon-social" />
                    </Button>
                    <Button type="link" isExternal target="_blank" className="mt-2" href="https://www.linkedin.com/in/dicky-saputra-345b24199">
                        <img src={IcLinkedin} alt="icon linkedin" className="icon-social" />
                    </Button>
                    <Button type="link" isExternal target="_blank" className="mt-2" href="mailto:saputradicky705@gmail.com">
                        <img src={IcEmail} alt="icon email" className="icon-social" />
                    </Button>
                    <Button type="link" isExternal target="_blank" className="mt-2" href="https://instagram.com/dicky54putra.sharing">
                        <img src={IcInstagram} alt="icon email" className="icon-social" />
                    </Button>
                </div>
            </div>
        </Fade>
    )
}

