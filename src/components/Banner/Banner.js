import React from 'react';
import './Banner.css'
import image from '../../images/amit-image.jpg'
import resume from '../../images/Md.Amit Hasan_resume.pdf';


const Banner = () => {
    return (
        <div className='row banner-background'>
            <div className='col md-8 d-flex justify-content-center align-items-center'>

                
               <div>

                   {/* Image section */}
                   <div className='text-start ms-5'>
                   <img className=' rounded-circle  image' src={image} alt="" />
                   </div>

                   {/* Text  section */}
               <h3 className='text-light text-start ms-5 mt-3'>I’m Amit Hasan. I develop <br />
                 a full responsive single page web application in react js.</h3>
                 <p className='text-light text-start ms-5'>I am a react developer located in Dhaka Bangladesh. I currently work as a student in Daffodil International University. I am looking to take on more work and to increase my skills as a react developer.</p>
                 
                 {/* Button section */}
                 <div className='text-start ms-5 mt-4'>
                 {/* <button id="contact-from " type="button " className="btn btn-light rounded-pill   ">CONTACT ME</button> */}
               
               <a rel="stylesheet" href="#contact"  ><button style={{fontSize:'1.2vw'}} type="button " className="btn btn-light rounded-pill">CONTACT ME</button> </a>
                 <a
                  className="btn btn-outline-light text-dark ms-5 rounded-pill  js-scroll px-4 "
                   style={{fontSize:'1.2vw'}}
                  href={resume} download="YourName resume.pdf"
                  role="button"
                >
                  DONWNLOAD CV
                </a>

                 </div>
                 
                 {/* Address section */}
                 <div className='text-start ms-5 mt-4'>
                    <p><span className='text-light'>Pnone</span>  <span className='text-light ms-5 text-start'>  01727-451869</span></p>
                    <p><span className='text-light '>Email</span>  <span className='text-light ms-5 text-start'>amithasan102827@gmail.com</span></p>
                    <p><span className='text-light '>Address</span>  <span className='text-light ms-4 '>Mohammodpur, Dhaka</span></p>
                    <p><span className='text-light '>Social</span>  <span className='text-light ms-5 '>
                        <a className='text-light' href="https://www.facebook.com/profile.php?id=100012666663556"><i class="fab fa-facebook icon"></i></a>
                        <a className='text-light mx-3' href="https://www.linkedin.com/in/md-amit-hasan-848385227/"><i class="fab fa-linkedin icon"></i></a>

                        <a className='text-light' href="https://github.com/amithasan102827?tab=repositories"><i class="fab fa-github icon "></i> </a>
                        </span></p>
                    
                 </div>
               </div>



            </div>
            <div className='col-md-4'>

            </div>
            
        </div>
    );
};

export default Banner;