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
               <h3 className='text-light text-start ms-5 mt-3'>I’m Amit Hasan. I design <br />
                 mobile and web experiences.</h3>
                 <p className='text-light text-start ms-5'>I am a UI\UX designer located in Hartford, Connecticut. I currently work as a part time Remote Junior Web Designer for Coolor, located in Las Vegas. I am looking to take on more work and to increase my skills as a UI\UX enthusiast.</p>
                 
                 {/* Button section */}
                 <div className='text-start ms-5 mt-4'>
                 <button id="contact-from " type="button " className="btn btn-light rounded-pill   ">CONTACT ME</button>
               

                 <a
                  className="btn btn-outline-light text-dark ms-5 rounded-pill  js-scroll px-4"

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
                    
                 </div>
               </div>



            </div>
            <div className='col-md-4'>

            </div>
            
        </div>
    );
};

export default Banner;