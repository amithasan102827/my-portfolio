import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/project4/image1.png'
import image2 from '../../images/project4/image2.png'
import image3 from '../../images/project4/image3.png'
import image4 from '../../images/project4/image4.png'
import projects4 from '../../images/screenbud-d17d2618-c919-400f-b90c-120a3439280c.png';

const ProjectsDetails4 = () => {
    return (
        <div>
            <div className="" style={{ backgroundColor: '#F0F8FF' }}>
                <h1>Projects Details 4</h1>
                <div className='container w-75 mb-5'>

                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={projects4}
                                alt="First slide"
                            />
                            {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={image1}
                                alt="Second slide"
                            />
                            {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image2}
                                alt="Third slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image3}
                                alt="Third slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image4}
                                alt="Third slide"
                            />

                        </Carousel.Item>



                    </Carousel>

                </div>
                <div className='container text-start w-75 mt-2 p-3'>
                    <p>My website name is Smart Education
                        This is a Educational website
                        This is a single page react website
                        I made this website for educational purpose</p>

                    <a href="https://github.com/amithasan102827/Assignment-9"><button type="button" class="btn btn-primary btn-sm">Github Link</button></a>
                    <a href=" https://kind-ramanujan-034ba7.netlify.app/"><button type="button" class="btn btn-success btn-sm mx-3">Live Site</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails4;