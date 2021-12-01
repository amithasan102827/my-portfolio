import React from 'react';
import projects1 from '../../images/screenbud-f24c295d-6ba3-4f45-b5f5-f6e07206a095.png'
import image1 from '../../images/project1/image1.png'
import image2 from '../../images/project1/image2.png'
import image3 from '../../images/project1/image3.png'
import image4 from '../../images/project1/image4.png'
import image5 from '../../images/project1/image5.png'
import image6 from '../../images/project1/image6.png'
import image7 from '../../images/project1/image7.png'
import { Carousel } from 'react-bootstrap';

const ProjectsDetails1 = () => {
    return (
        <div className="" style={{ backgroundColor: '#F0F8FF' }}>
            <h1>Projects Details 1</h1>
            <div className='container w-75 mb-5'>

                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={projects1}
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
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image5}
                            alt="Third slide"
                        />
                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image6}
                            alt="Third slide"
                        />
                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image7}
                            alt="Third slide"
                        />
                       
                    </Carousel.Item>
                    
                </Carousel>

            </div>
            <div className='container text-start w-75 mt-2 p-3'>
                <p>This is a car sales online shop full stack responsive website.  The website has two part users part and admin part.  The user part user sees the product, order the product and manage the orders.  The admin part admin manages all product and order and make an admin..</p>
                <a href="https://github.com/amithasan102827/Assignment-12"><button type="button" class="btn btn-primary btn-sm">Github Link</button></a>

                <a href=" https://assignment-12-d7623.web.app/"><button type="button" class="btn btn-success btn-sm mx-3">Live Site</button></a>
            </div>
        </div>
    );
};

export default ProjectsDetails1;