import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import './ContactSection.css'

const ContactSection = () => {
    return (
        <div id="contact-from" className='row mt-5 mb-5'>
        <div className='col md-6 '>
            <h2 className='text-start ms-5 mb-5'>Contact Me</h2>
           <div>
           <p className='text-start ms-5'>Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it. I will not spam you on
                e-mail or add to MailChimp list.</p>
            <div className='text-start ms-5 mt-4'>
                <p><span className='text-dark'>Pnone</span>  <span className='text-dark ms-5 text-start'>  01727-451869</span></p>
                <p><span className='text-dark '>Email</span>  <span className='text-dark ms-5 text-start'>amithasan102827@gmail.com</span></p>
                <p><span className='text-dark '>Address</span>  <span className='text-dark ms-4 '>Mohammodpur, Dhaka</span></p>

            </div>
           </div>
        </div>

        <div className='col-md-6 mx-3'>
           <ContactUs></ContactUs>
        </div>
    </div>
    );
};

export default ContactSection;