import React, { useRef } from 'react';
import './ContactUs.css';
import emailjs from 'emailjs-com';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mze3nhe', 'template_trd2x3u', form.current, 'user_tfRLyATId39GGyatDoJJH')
            .then((result) => {
                console.log(result);
                alert('Email send successfully')
            }, (error) => {
                console.log(error);
            });
            e.target.reset()
    };



    return (
        //     <div className=''>
        //     <form ref={form} onSubmit={sendEmail}>
        //     <label>Name</label>
        //     <input className='w-50 p-1 m-3' type="text" name="name" /> <br />
        //     <label>Email</label> 
        //     <input className='w-50 p-1 m-3'  type="email"  name="user_email" /> <br />
        //     <label>Message</label>
        //     <textarea className='w-50 p-1 m-3' name="message" /> <br />
        //     <input className='w-50 p-1 m-3' type="submit" value="Send" />
        //   </form>
        //   </div>

        <div class="container w-100 text-start ">
            <form ref={form} onSubmit={sendEmail}>
                <label for="fname "> Name</label>
                <input type="text" id="fname" name="name" placeholder="Your name.." />

                <label for="lname">Email</label>
                <input type="email" id="lname" name="user_email" placeholder="Email.." />

                {/* <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select> */}

                <label for="subject">Message</label>
                <textarea id="subject" name="message" placeholder="Write something.." style={{height:'100px'}}></textarea>

                <input type="submit" value="send" />
            </form>
        </div>

    );
};

export default ContactUs;