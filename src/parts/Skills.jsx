import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Skills(props) {
    const skill = props.data
    const experience = (y) => {
        const intYear = parseInt(y);
        const thisYear = new Date().getFullYear()
        const long = thisYear - intYear
        if (long === 0) {
            return `less than 1 year Experience`
        } else {
            return `more than ${long} year Experience`
        }
    }
    return (
        <div className="mt-3">
            <Fade left>
                <h3 className="title-component">Skills</h3>
            </Fade>
            <div className="row">
                {skill.map((item, index) => {
                    return (
                        <Fade bottom delay={100 * index}>
                            <div key={`skill-image-${index}`} className="col-auto mx-auto">
                                <div className="card mb-2 mt-2" style={{ height: 150, border: 'none' }}>
                                    <img src={item.image} alt={item.name} width="70" className="mx-auto" />
                                    <div className="card-body">
                                        {experience(item.startDate)}
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    )
                })}
            </div>
        </div>
    )
}
