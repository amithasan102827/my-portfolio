import React from 'react';
import image2 from '../../images/undraw_percentages_0rur.png';
import skillgif from '../../images/40851-pentagram-skills-of-deth.gif';

const Skill = () => {
    return (
        <div className=' container'><h2 className='mt-5'>My Skills</h2>
        <div className='row'>
            
            <div className='col-md-6'>
            
                <img className='w-100' src={image2} alt="" />
            </div>
            <div className='col-md-6 mt-4 '>

                
                <div class="progress my-5">
                   
                    <div class="progress-bar" role="progressbar" style={{width:'85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> HTML</div>
                </div>
                <div class="progress my-5">
                    <div class="progress-bar" role="progressbar"style={{width:'80%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">CSS</div>
                </div>
                <div class="progress my-5">
                    <div class="progress-bar" role="progressbar" style={{width:'70%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">JAVASCRIPT</div>
                </div>
                <div class="progress my-5">
                    <div class="progress-bar" role="progressbar" style={{width:'75%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">REACT.JS</div>
                </div>
                <div class="progress my-5">
                    <div class="progress-bar" role="progressbar" style={{width:'60%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">NODE.JS</div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Skill;