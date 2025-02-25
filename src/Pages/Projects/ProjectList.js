import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import PageTitle from '../../Components/PageTitle';
import "../../Styles/scss/style.min.css";
import "swiper/css";
import "swiper/css/pagination";
import ProjectList1 from "../../Assets/ProjectList1.jpg";
import ProjectList2 from "../../Assets/ProjectList2.jpg";
import ProjectList3 from "../../Assets/ProjectList3.jpg";
import ProjectList4 from "../../Assets/ProjectList4.jpg";

const projectCards = [
    { id: 1, image: ProjectList1, title: "Air Frieght" },
    { id: 2, image: ProjectList2, title: "Supply Chain" },
    { id: 3, image: ProjectList1, title: "Other Solution" },
    { id: 4, image: ProjectList3, title: "Road Service" },
    { id: 5, image: ProjectList4, title: "Supply" },
];

const ProjectList = () => {
    return (
        <div>
            <PageTitle title="Projects" />
            <section className="project-list">
                <div className="project-container">
                    <div className="project-carousel">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={15}
                            slidesPerView={4}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            pagination={{ clickable: true, el: ".project-pagination" }}
                            breakpoints={{
                                0: { slidesPerView: 2 },
                                600: { slidesPerView: 2 },
                                1000: { slidesPerView: 3 },
                                1200: { slidesPerView: 4 },
                            }}
                        >
                            {projectCards.map((card) => (
                                <SwiperSlide key={card.id}>
                                    <div className="project-card">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="project-image"
                                        />
                                        <div className="project-label">
                                            <b>{card.title}</b>
                                            <div className="project-plus">+</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="project-pagination"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectList;
