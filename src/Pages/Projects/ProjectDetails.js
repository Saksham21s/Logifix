import React from 'react';
import PageTitle from '../../Components/PageTitle';
import "../../Styles/scss/style.min.css";
import projectImage from '../../Assets/FullAeroplane.jpg';
import { FaStar } from 'react-icons/fa';


const ProjectList = () => {
    return (
        <div>
            <PageTitle title="Projects" />
            <section className="project-list-container">
                <div className="project-image">
                    <img src={projectImage} alt="Project" />
                </div>
                <div className="project-details">
                    <div className="details-row">
                        <div className="detail">
                            <span className="label">Date</span>
                            <span className="value">10 January, 2023</span>
                        </div>
                        <div className="detail">
                            <span className="label">Client</span>
                            <span className="value">Kodesolution Ltd</span>
                        </div>
                        <div className="detail">
                            <span className="label">Website</span>
                            <span className="value">www.domain.com</span>
                        </div>
                        <div className="detail">
                            <span className="label">Location</span>
                            <span className="value">New York, USA</span>
                        </div>
                    </div>
                </div>
                <div className="project-content">
                    <h2>Here to Know About This Project</h2>
                    <p>  ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra facilisis lectus ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra facilisis lectus ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra facilisis lectus ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra facilisis lectus</p> <br />
                    <p>
                        dolor sit amet, consectetur adipiscing elit. Sed viverra facilisis lectus, in facilisis lectus consectetur a. Sed rhoncus, nunc at efficitur congue, ipsum dolor bibendum ex, id gravida felis nunc at velit. Sed vel pulvinar dui. Integer et massa vel ex tincidunt vulputate. Cras auctor, ipsum vel pharetra semper, ligula neque gravida velit, vel fermentum ex justo vel velit. Donec non arcu quis turpis consectetur condimentum. Donec euismod massa in ex faucibus, non consectetur nisi fermentum. Sed et velit et nunc ullamcorper semper. Donec facilisis, ex ac consectetur mattis, lectus ligula malesuada velit, at convallis ipsum felis in velit. Donec auctor, ipsum vel pharetra semper, ligula neque gravida velit, vel fermentum ex justo vel velit. Donec non arcu quis turpis consectetur condimentum
                    </p>
                    <ul className="project-detail-bottom">
                    <li className="project-links"> <i><FaStar/></i> dolor sit amet, consectetur adipiscing elit.</li>
                    <li className="project-links"><i><FaStar/></i> dolor sit amet, consectetur adipiscing elit.</li>
                    <li className="project-links"><i><FaStar/></i> dolor sit amet, consectetur adipiscing elit.</li>
                    <li className="project-links"><i><FaStar/></i> dolor sit amet, consectetur adipiscing elit.</li>
                    <li className="project-links"><i><FaStar/></i> dolor sit amet, consectetur adipiscing elit.</li>
                    <li className="project-links"><i><FaStar/></i> dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ProjectList;
