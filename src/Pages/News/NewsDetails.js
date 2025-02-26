import React from "react";
import PageTitle from '../../Components/PageTitle';
import '../../Styles/scss/style.min.css';
import newsImage from '../../Assets/service-details.jpg';
import UserImage1 from '../../Assets/logifix-lady-ceo.jpg';
import UserImage2 from '../../Assets/logifix-ceo.jpg';
import { FaUser, FaComment,FaStar } from 'react-icons/fa';

const NewsDetails = () => {
    return (
        <div className="news-details-page">
            <PageTitle title="News Details" />
            <div className="news-details-content">
                <div className="news-content">
                    <img src={newsImage} alt="News Details" className="news-image" />
                    <div className="news-meta">
                        <span><FaUser className="icon-admin" /> Admin</span>
                        <span><FaComment className="icon-admin" /> Comments</span>
                    </div>
                    <h2 className="news-title">Transport & Logistics Services</h2>
                    <p className="news-text">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisi pellentesque semper.</p>
                    <p className="news-text">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisi pellentesque semper.</p>
                    <p className="news-text">Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisi pellentesque semper.</p>
                    <div className="news-tags">
                        <span className="tag">Business</span>
                        <span className="tag">Agency</span>
                    </div>
                    <div className="related-posts">
                        <div className="related-post">
                            <div className="related-post-content">
                                Bring to the table win-win survival strategies
                            </div>
                        </div>
                        <div className="related-post">
                            <div className="related-post-content">
                                How to lead a healthy & well-balanced life
                            </div>
                        </div>
                    </div>
                    <div className="comments-section">
                        <h2>2 Comments</h2>
                        <div className="comment">
                            <div className="comment-author-image">
                            <img src={UserImage1} alt="User-Image"/>
                            </div>
                            <div className="comment-content">
                                <h3>Kevin Martin</h3>
                                <p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.</p>
                                <button className="reply-button">Reply</button>
                            </div>
                        </div>
                        <div className="comment">
                            <div className="comment-author-image"><img src={UserImage2} alt="User-Image"/></div>
                            <div className="comment-content">
                                <h3>Sarah Albert</h3>
                                <p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.</p>
                                <button className="reply-button">Reply</button>
                            </div>
                        </div>
                    </div>
                    <div className="leave-comment-section">
                        <h2>Leave a Comment</h2>
                        <div className="comment-form">
                            <input type="text" placeholder="Enter Name" className="comment-input" />
                            <input type="email" placeholder="Enter Email" className="comment-input" />
                            <textarea placeholder="Enter Message" className="comment-textarea"></textarea>
                            <button className="submit-comment-button">Submit Comment</button>
                        </div>
                    </div>
                </div>
                <div className="news-sidebar">
                    <div className="sidebar-search">
                        <input type="text" placeholder="Search here" className="search-input" />
                        <button className="search-button">Q</button>
                    </div>
                    <div className="sidebar-latest-posts">
                        <h3 className="sidebar-title">Latest Posts</h3>
                        <div className="post">
                            <img src={newsImage} alt="Post" className="post-image" />
                            <div className="post-content">
                                <span><FaUser className="icon-admin" /> Admin</span>
                                <p className="post-title">Top crypto exchange influencers</p>
                            </div>
                        </div>
                        <div className="post">
                            <img src={newsImage} alt="Post" className="post-image" />
                            <div className="post-content">
                                <span><FaUser className="icon-admin" /> Admin</span>
                                <p className="post-title">Necessity may give us best virtual court</p>
                            </div>
                        </div>
                        <div className="post">
                            <img src={newsImage} alt="Post" className="post-image" />
                            <div className="post-content">
                                <span><FaUser className="icon-admin" /> Admin</span>
                                <p className="post-title">You should know about business plan</p>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-categories">
                        <h3 className="sidebar-title">Categories</h3>
                        <div className="category">Business</div>
                        <div className="category active">Transport</div>
                        <div className="category">Introductions</div>
                        <div className="category">New Technologies</div>
                        <div className="category">Parallax Effects</div>
                        <div className="category">Warehouses</div>
                    </div>
                    <div className="sidebar-tags">
                        <h3 className="sidebar-title">Tags</h3>
                        <div className="sidebar-grid-div">
                        <div className="tag">Transport</div>
                        <div className="tag">Cargo</div>
                        <div className="tag">Business</div>
                        <div className="tag">Delivery</div>
                        <div className="tag">Warehouses</div>
                        <div className="tag">Logistic</div>
                        </div>
                    </div>
                    <div className="sidebar-recent-comments">
                        <h3 className="sidebar-title">Recent Comments</h3>
                        <div className="recent-comment">
                            <div className="recent-comment-icon"><i className="red-icon"><FaStar /></i></div>
                            <div className="recent-comment-content">
                                A wordpress commenter on launch new mobile app
                            </div>
                        </div>
                        <div className="recent-comment">
                            <div className="recent-comment-icon"><i className="red-icon"><FaStar /></i></div>
                            <div className="recent-comment-content">
                                John Doe on template: comments
                            </div>
                        </div>
                        <div className="recent-comment">
                            <div className="recent-comment-icon"><i className="red-icon"><FaStar /></i></div>
                            <div className="recent-comment-content">
                                A wordpress commenter on launch new mobile app
                            </div>
                        </div>
                        <div className="recent-comment">
                            <div className="recent-comment-icon"><i className="red-icon"><FaStar /></i></div>
                            <div className="recent-comment-content">
                                John Doe on template: comments
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;