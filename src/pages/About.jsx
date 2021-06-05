import Navbar from 'parts/Navbar'
import React, { Component } from 'react'

import TitlePage from 'elements/TitlePage'
import Footer from 'parts/Footer'
import axios from 'axios'
import { API_URL } from 'utils/link'

export default class About extends Component {
    state = {
        data: {}
    }

    componentDidMount() {
        axios.get(`${API_URL}about.json`)
            .then(res => {
                const data = res.data
                this.setState({ data })
            })
            .catch(err => console.log(err))
    }


    render() {
        const breadcrumbList = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "About", pageHref: "" },
        ]
        const data = this.state.data
        return (
            <>
                <div className="container">
                    <Navbar breadcrumb={breadcrumbList} />
                    <TitlePage title={data.title} subTitle={data.subtitle} />
                    <p>{data.desc}</p>
                </div>
                <Footer></Footer>
            </>
        )
    }
}
