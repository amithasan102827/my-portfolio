import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../../images/project5/image1.png'
import image2 from '../../images/project5/image2.png'

import projects5 from '../../images/screenbud-8a66404b-12e4-47a2-a18c-2a257ef99491.png';
const ProjectsDetails5 = () => {
    return (
        <div>
            <div className="" style={{ backgroundColor: '#F0F8FF' }}>
                <h1>Projects Details 5</h1>
                <div className='container w-75 mb-5'>

                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={projects5}
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
                    </Carousel>

                </div>
                <div className='container text-start w-75 mt-2 p-3'>
                    <p>This is a online food shop website I made this website in html and css</p>

                    <a href="https://github.com/amithasan102827/Assignment-1"><button type="button" class="btn btn-primary btn-sm">Github Link</button></a>
                    <a href="https://amithasan102827.github.io/Assignment-1/"><button type="button" class="btn btn-success btn-sm mx-3">Live Site</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails5;