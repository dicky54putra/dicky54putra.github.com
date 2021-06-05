import Navbar from 'parts/Navbar'
import React, { Component } from 'react'

import TitlePage from 'elements/TitlePage'
import Footer from 'parts/Footer'
import Fade from 'react-reveal/Fade'

import Skills from 'parts/Skills'
import WorkExperience from 'parts/WorkExperience'
import Education from 'parts/Education'
import axios from 'axios'
import { API_URL } from 'utils/link'

export default class Resume extends Component {
    state = {
        data: {
            work_experience: [],
            education: [],
            skills: []
        }
    }

    componentDidMount() {
        axios.get(`${API_URL}resume.json`)
            .then(res => {
                const data = res.data
                this.setState({ data })
            })
            .catch(err => console.log(err))
    }

    render() {
        const breadcrumbList = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "Resume", pageHref: "" },
        ]
        const data = this.state.data
        return (
            <>
                <Fade>
                    <div className="container">
                        <Navbar breadcrumb={breadcrumbList} />
                        <TitlePage title={data.title} subTitle={data.subtitle} />
                        <WorkExperience data={data.work_experience}></WorkExperience>
                        <Education data={data.education}></Education>
                        <Skills data={data.skills} isExperience={data.isExperience}></Skills>
                        <p className="title-component mt-3">If you interested with me, please email to <a href="mailto:saputradicky705@gmail.com" className="primary" rel="noreferrer noopener">saputradicky705@gmail.com</a></p>
                    </div>
                    <Footer></Footer>
                </Fade>
            </>
        )
    }
}
