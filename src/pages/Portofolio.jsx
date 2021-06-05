import Footer from 'parts/Footer'
import Navbar from 'parts/Navbar'
import React, { Component } from 'react'

import TitlePage from 'elements/TitlePage'

import Project from 'parts/Project'
import axios from 'axios'
import { API_URL } from 'utils/link'

export default class Portofolio extends Component {
    state = {
        data: {
            project: []
        }
    }

    componentDidMount() {
        axios.get(`${API_URL}portofolio.json`)
            .then(res => {
                const data = res.data
                this.setState({ data })
            })
            .catch(err => console.log(err))
    }

    render() {
        const breadcrumbList = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "Portofolio", pageHref: "" },
        ]
        const data = this.state.data
        return (
            <>
                <div className="container">
                    <Navbar breadcrumb={breadcrumbList} />
                    <TitlePage title={data.title} subTitle={data.subtitle} />
                    <Project data={data.project} ></Project>
                </div>
                <Footer></Footer>
            </>
        )
    }
}
