import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Education(props) {
    const data = props.data
    return (
        <div className="mt-3 work-experience">
            <Fade left>
                <h3 className="title-component">Education</h3>
            </Fade>
            {data.map((item, index) => {
                const border = (index > 0) ? '1px solid rgba(108, 117, 125, 0.23)' : ''
                return (
                    <Fade bottom delay={200 * index}>
                        <div key={`${index}`} className="row mt-2 mb-2" style={{ borderTop: border }}>
                            <div className="col-auto">
                                <figure className="img-round">
                                    <img className="mt-50 p-3" src={`images/${item.logo}`} alt={props.company} width="150" />
                                </figure>
                            </div>
                            <div className="col d-flex align-items-center">
                                <dl>
                                    <dd style={{ fontWeight: 600, fontSize: 18 }}>{item.name}</dd>
                                    <dd className="primary" style={{ fontWeight: 500, fontSize: 18 }}>{item.major}</dd>
                                    <dd style={{ fontWeight: 300, fontSize: 18 }}>{item.startDate} - {item.endDate}</dd>
                                </dl>
                            </div>
                        </div>
                    </Fade>
                )
            })}
        </div>
    )
}
