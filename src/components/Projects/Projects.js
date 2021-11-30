import React from 'react';

import projects1 from '../../images/screenbud-f24c295d-6ba3-4f45-b5f5-f6e07206a095.png'
import projects2 from '../../images/screenbud-adbf8587-0197-4e57-8e5f-c77d32a2e36a.png';
import projects3 from '../../images/screenbud-21d6f3ea-dcad-4e23-911c-b8f1e64bb89d.png';
import projects4 from '../../images/screenbud-d17d2618-c919-400f-b90c-120a3439280c.png';
import projects5 from '../../images/screenbud-8a66404b-12e4-47a2-a18c-2a257ef99491.png';
import projects6 from '../../images/screenbud-c5708c30-a278-40a6-9a36-5b9acbd04c46.png';

const Projects = () => {
    return (
        <div className='container mt-5'>
            <h2>My Projects</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100 ">
                        <img src={projects1} class="card-img-top" alt="..." />
                        <div class="card-body text-start">
                            <h5 class="card-title text-start">Car Sales website</h5>
                            <p class="card-text text-start">This is a car sales online shop full stack responsive website.  The website has two part users part and admin part.  The user part user sees the product, order the product and manage the orders.  The admin part admin manages all product and order and make an admin..</p>
                            <a href="https://github.com/amithasan102827/Assignment-12"> <button type="button" class="btn btn-primary btn-sm">Github Link</button></a>
                            <a href=" https://assignment-12-d7623.web.app/"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>

                        </div>



                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={projects2} class="card-img-top" alt="..." />
                        <div class="card-body text-start">
                            <h5 class="card-title">Travel website</h5>
                            <p class="card-text">This is a travel and tourism related full stack website.  User can login and logout.  The user part user sees the product, order the product and manage the orders.</p>
                            <a href="https://github.com/amithasan102827/Assignment-11-client-side"> <button type="button" class="btn btn-primary btn-sm">Github Link</button></a>
                            <a href=" https://travel-assignment-11.web.app/"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={projects3} class="card-img-top" alt="..." />
                        <div class="card-body text-start">
                            <h5 class="card-title">Healthcare website</h5>
                            <p class="card-text">This is a healthcare related website.  Email-Password and Google Sign in Authentication.  This is a single page react website.</p>
                            <a href="https://github.com/amithasan102827/Assignment-10-healthcare"> <button type="button" class="btn btn-primary btn-sm">Github Link</button></a>
                            <a href=" https://mediyot-healthcare.web.app/#"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={projects4} class="card-img-top" alt="..." />
                        <div class="card-body text-start">
                            <h5 class="card-title">Smart Education</h5>
                            <p class="card-text">This is a Educational website
                                This is a single page react website
                                I made this website for educational purpose</p>
                            <a href="https://github.com/amithasan102827/Assignment-9"> <button type="button" class="btn btn-primary btn-sm">Github Link</button></a>
                            <a href=" https://kind-ramanujan-034ba7.netlify.app/"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={projects5} class="card-img-top" alt="..." />
                        <div class="card-body text-start">
                            <h5 class="card-title">Food Village</h5>
                            <p class="card-text">This is a online food shop website
                                
                                I made this website in html and css</p>
                            <a href="https://github.com/amithasan102827/Assignment-1"> <button type="button" class="btn btn-primary btn-sm">Github Link</button></a>
                            <a href="https://amithasan102827.github.io/Assignment-1/"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={projects6} class="card-img-top" alt="..." />
                        <div class="card-body text-start">
                            <h5 class="card-title ">Players</h5>
                            <p class="card-text">I made this website by  html and css </p>
                            <a href="https://github.com/amithasan102827/responsive-football"> <button type="button" class="btn btn-primary btn-sm">Github Link</button></a>
                            <a href=" https://amithasan102827.github.io/responsive-football/"> <button type="button" class="btn btn-success btn-sm ms-3">Live Site</button> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;