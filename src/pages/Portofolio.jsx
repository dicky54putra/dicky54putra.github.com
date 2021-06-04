import Footer from 'parts/Footer'
import Navbar from 'parts/Navbar'
import React, { Component } from 'react'

import TitlePage from 'elements/TitlePage'

import data from 'json/portofolio.json'
import Project from 'parts/Project'

export default class Portofolio extends Component {
    render() {
        const breadcrumbList = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "Portofolio", pageHref: "" },
        ]
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
