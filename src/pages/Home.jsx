import React, { Component } from 'react'

import SocialIcon from 'parts/SocialIcon'
import My from 'parts/My'
import Menu from 'parts/Menu'
export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row vh-100">
                    <SocialIcon></SocialIcon>
                    <My></My>
                    <Menu></Menu>
                </div>
            </div>
        )
    }
}
