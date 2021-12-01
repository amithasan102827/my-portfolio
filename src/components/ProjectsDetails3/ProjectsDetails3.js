import React from 'react';
import { Carousel } from 'react-bootstrap';
import projects3 from '../../images/screenbud-21d6f3ea-dcad-4e23-911c-b8f1e64bb89d.png';
import image1 from '../../images/project3/image1.png'
import image2 from '../../images/project3/image2.png'
import image3 from '../../images/project3/image3.png'
import image4 from '../../images/project3/image4.png'
import image5 from '../../images/project3/image5.png'

const ProjectsDetails3 = () => {
    return (
        <div>
            <div className="" style={{ backgroundColor: '#F0F8FF' }}>
                <h1>Projects Details 3</h1>
                <div className='container w-75 mb-5'>

                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={projects3}
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


                    </Carousel>

                </div>
                <div className='container text-start w-75 mt-2 p-3'>
                    <p>My website name is Mediyot Hospital.
                        This is a healthcare related website.
                        if you want view our department details you must be login.
                        and if you want to an appointment in our doctor you .should be login and same to for Ask Us section.
                        you can login by usin google sing in.
                        and also you can create a new accout in out register section and password leangth must be 6.</p>

                    <a href="https://github.com/amithasan102827/Assignment-10-healthcare"><button type="button" class="btn btn-primary btn-sm">Github Link</button></a>

                    <a href=" https://mediyot-healthcare.web.app/#"><button type="button" class="btn btn-success btn-sm mx-3">Live Site</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails3;