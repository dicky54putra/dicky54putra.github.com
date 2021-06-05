import Navbar from 'parts/Navbar'
import React, { Component } from 'react'

import TitlePage from 'elements/TitlePage'
import Footer from 'parts/Footer'
import axios from 'axios'
import { API_URL } from 'utils/link'
import { IMAGE_URL } from 'utils/link'

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
                    <img src={`${IMAGE_URL}${data.profile}`} className="img-round " alt="" width="150" style={{ marginTop: 100, marginBottom: "-50px" }} />
                    <div className="mx-auto">
                        <span style={{
                            'white-space': 'pre-wrap'
                        }}>{data.desc}</span>
                    </div>
                </div>
                <Footer></Footer>
            </>
        )
    }
}
