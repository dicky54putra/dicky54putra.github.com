import Button from 'elements/Button';
import Fade from 'react-reveal/Fade'
import React from 'react'

export default function Project(props) {
    const data = props.data
    console.log(data);
    return (
        <div className="row mt-4 mb-3">

            {data.map((item, index) => (
                <Fade bottom delay={200 * index}>
                    <div key={`project-${index}`} className="card-project col-lg-4 col-md-4 col-sm-6 mb-3 position-relative">
                        <figure className="img-grid-4" >
                            <img className="img-grid-4" src={`images/${item.cover}`} alt={item.title} width="100%" />
                        </figure>
                        <h3 style={{ fontSize: 16, fontWeight: 500 }}>{item.title}</h3>
                        <div className="position-absolute top-50 start-50 translate-middle card-project-child">
                            <p>{item.desc}</p>
                            {item.demo !== '-' && (
                                <Button type="link" href={item.demo} isExternal target="_blank" className="btn px-5" isPrimary>Demo</Button>
                            )}
                        </div>
                    </div>
                </Fade>
            ))}
        </div>
    )
}
