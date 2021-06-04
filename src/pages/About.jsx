import Navbar from 'parts/Navbar'
import React, { Component } from 'react'

import TitlePage from 'elements/TitlePage'
import Footer from 'parts/Footer'

import data from 'json/about.json'

export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            markdown: ""
        }
    }
    render() {
        const breadcrumbList = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "About", pageHref: "" },
        ]
        return (
            <>
                <div className="container">
                    <Navbar breadcrumb={breadcrumbList} />
                    <TitlePage title={data.title} subTitle={data.subtitle} />
                </div>
                <div style={{ height: 400 }}></div>
                <Footer></Footer>
            </>
        )
    }
}
