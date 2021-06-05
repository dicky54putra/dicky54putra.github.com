import React, { Component } from 'react'

import { My2 } from 'parts/My'
import SocialIcon from 'parts/SocialIcon'
import Footer from 'parts/Footer'
export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row vh-100">
                    <SocialIcon></SocialIcon>
                    <My2></My2>
                    <Footer isHome></Footer>
                </div>
            </div>
        )
    }
}
