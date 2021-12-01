import React from 'react';
import gif from '../../images/8306-programming-animation.gif';

const AboutMe = () => {
    return (
        <div className='container '>
            <h1 className='mt-2'>About Me</h1>
            <div className='row '>
                <div className='col-md-6 d-flex justify-content-center align-items-center text-start mb-5'>
                 <p>I'm Md. Amit Hasan. I am a student.I lives in Rajshahi.I study at Daffodil International University in Computer Science and Engineering.I am  a react developer. I made some projets in react.js which are you seen in my home page.</p>
                </div>

                <div className='col-md-6'>
                  <img className='ms-5 ' src={gif} alt="" style={{width:'90%'}} />
                </div>

            </div>

        </div>
    );
};

export default AboutMe;