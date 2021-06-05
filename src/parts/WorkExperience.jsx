import React from 'react'
import Fade from 'react-reveal/Fade'

export default function WorkExperience(props) {
    const data = props.data
    return (
        <div className="mt-3 work-experience">
            <Fade left>
                <h3 className="title-component">Work Experience</h3>
            </Fade>
            {data.map((item, index) => {
                const border = (index > 0) ? '1px solid rgba(108, 117, 125, 0.23)' : ''
                return (
                    <Fade bottom delay={200 * index} key={`${index}`}>
                        <div className="row mx-auto mt-2 mb-2" style={{ borderTop: border }}>
                            <div className="col-auto">
                                <figure className="img-round">
                                    <img className="mt-50" src={`images/${item.logo}`} alt={props.company} width="150" />
                                </figure>
                            </div>
                            <div className="col-auto d-flex align-items-center">
                                <dl>
                                    <dd style={{ fontWeight: 600, fontSize: 18 }}>{item.position}</dd>
                                    <dd className="primary" style={{ fontWeight: 500, fontSize: 18 }}>{item.company}</dd>
                                    <dd style={{ fontWeight: 300, fontSize: 18 }}>{item.startDate} - {item.endDate}</dd>
                                </dl>
                            </div>
                            <div className="col d-flex align-items-center">
                                <span>{item.jobdesk}</span>
                            </div>
                        </div>
                    </Fade>
                )
            })}

        </div>
    )
}
