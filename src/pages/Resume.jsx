import Navbar from 'parts/Navbar'
import React, { Component } from 'react'

import TitlePage from 'elements/TitlePage'
import Footer from 'parts/Footer'
import Fade from 'react-reveal/Fade'

import data from 'json/resume.json'
import Skills from 'parts/Skills'
import WorkExperience from 'parts/WorkExperience'
import Education from 'parts/Education'

export default class Resume extends Component {
    render() {
        const breadcrumbList = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "Resume", pageHref: "" },
        ]
        return (
            <>
                <Fade>
                    <div className="container">
                        <Navbar breadcrumb={breadcrumbList} />
                        <TitlePage title={data.title} subTitle={data.subtitle} />
                        <WorkExperience data={data.work_experience}></WorkExperience>
                        <Education data={data.education}></Education>
                        <Skills data={data.skills}></Skills>
                        <p className="title-component mt-3">If you interested with me, please email to <a href="mailto:saputradicky705@gmail.com" className="primary" rel="noreferrer noopener">saputradicky705@gmail.com</a></p>
                    </div>
                    <Footer></Footer>
                </Fade>
            </>
        )
    }
}
