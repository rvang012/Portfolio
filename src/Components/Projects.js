import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="project">
                <div className="row">
                   <div className="twelve columns collapsed">
                        <h1>Here are some of my projects I've worked on!</h1>
                        <div id="project-wrapper" className="bgrid-quarters s-bgrid-thirds cf" alt="">
                            {
                            resumeData.Projects && resumeData.portfolio.map((item) => {
                                return (
                                    <div className="columns portfolio-item">
                                        <div className="item-wrap">
                                            <a href="#modal-01">
                                                <img src={`${item.imgurl}`} className="item-img"/>
                                                <div className="overlay">
                                                    <div className="portfolio-item-meta">
                                                        <h5>{item.name}</h5>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div> 
                </div>
            </section>
        );
    }
}