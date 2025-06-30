"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface ProjectDetails {
    title: string;
    category: string;
    description: string;
    image: string;
    overview: string;
    goals: string[];
    challenges: string;
    features: string[];
    outcome: string;
}

const Work = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState<ProjectDetails | null>(null);

    const projects = [
        {
            title: "INNOVATE DASHBOARD",
            category: "WEB APPLICATION",
            description: "A comprehensive dashboard for business analytics",
            image: "/assets/images/project1.png",
            overview: "Led the UX strategy and interface design for a business analytics dashboard aimed at simplifying complex data visualization. The solution provided stakeholders with a user-friendly and insightful tool to monitor and act on performance metrics.",
            goals: [
                "Design a user journey that simplifies data interpretation for non-technical users",
                "Create a responsive, intuitive interface adaptable across desktop and mobile",
                "Enhance visual hierarchy for clarity in large data sets",
                "Streamline key workflows like product analysis and sales tracking"
            ],
            challenges: "Managing large and complex datasets without overwhelming the user was a significant challenge. Implemented contextual design elements, collapsible panels, and prioritized visual hierarchy to reduce cognitive load and promote task clarity.",
            features: [
                "Modular dashboard layout with drag-and-drop customization",
                "Interactive data visualizations updated in real-time",
                "Role-based access for personalized user experiences",
                "Custom alerts and notifications for business-critical events"
            ],
            outcome: "The dashboard enhanced team decision-making with a 60% reduction in time spent locating key insights. Usability tests confirmed strong satisfaction scores, and adoption rates exceeded initial projections."
        },
        {
            title: "MINIMALIST WEB",
            category: "UI/UX DESIGN",
            description: "Clean and modern web design",
            image: "/assets/images/project2.png",
            overview: "Created a minimalist, content-focused web experience that emphasized readability and ease of use. The design leveraged whitespace, clear information hierarchy, and intuitive navigation to support a distraction-free environment.",
            goals: [
                "Deliver an uncluttered, immersive content experience",
                "Ensure navigation is discoverable yet unobtrusive",
                "Prioritize legibility and reading comfort across all devices"
            ],
            challenges: "Balancing simplicity with functional completeness was a key challenge. Solved through progressive disclosure and contextual design, enabling users to access advanced features only when needed.",
            features: [
                "Adaptive layout with content-first structure",
                "Smooth transitions to guide user flow",
                "Accessibility-focused visual system",
                "Persistent yet subtle navigation elements"
            ],
            outcome: "User engagement increased by 40%, with improved content consumption metrics. The design was praised for its clarity, simplicity, and ease of navigation during user testing sessions."
        },
        {
            title: "FITNESS TRACKER",
            category: "MOBILE APP",
            description: "Health and activity monitoring app",
            image: "/assets/images/project3.png",
            overview: "Led the UX design for a mobile fitness application focused on health tracking and user motivation. The interface was tailored to provide a seamless and engaging daily experience for users of varying fitness levels.",
            goals: [
                "Deliver an intuitive experience for tracking fitness and health data",
                "Use behavior-driven design to increase user engagement",
                "Ensure real-time syncing and integration with health devices"
            ],
            challenges: "Creating a consistent and responsive experience across mobile platforms and wearables required a modular design system and robust interaction patterns. Adapted content and visuals based on real-time user data.",
            features: [
                "Dynamic activity dashboard with personalized insights",
                "Gamified progress tracking to boost motivation",
                "Simple and seamless health device integration",
                "Custom goal setting with visual feedback"
            ],
            outcome: "Achieved over 50,000 downloads within the first month and maintained a 4.8-star rating. The app’s design contributed to strong retention and high engagement across key user segments."
        }
    ];


    const openModal = (projectIndex: number) => {
        setCurrentProject(projects[projectIndex]);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <section id="work">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="modal-btn bg-[#484A39] block spy sticky top-15 cursor-pointer"
                        onClick={() => openModal(index)}
                    >
                        <div className="container text-center">
                            <span className="text-lg md:text-xl lg:text-2xl text-w1/80">
                                {project.category}
                            </span>
                            <h4 className="visible-slowly-right text-4xl md:text-5xl lg:text-6xl xl:text-8xl leading-[100%] text-p1">
                                {project.title.split(' ')[0]}
                            </h4>
                            <h4 className="visible-slowly-right text-4xl md:text-5xl lg:text-6xl xl:text-8xl leading-[100%] text-p1">
                                {project.title.split(' ')[1]}
                            </h4>
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={1200}
                                height={800}
                                className="w-full h-full md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover rounded"
                            />
                        </div>
                    </div>
                ))}
            </section>

            {modalOpen && currentProject && (
                <div
                    id="detailsModal"
                    className={`modal`}
                    style={{ display: modalOpen ? 'flex' : 'none' }}
                    onClick={closeModal}
                >
                    <div
                        className="modal-content bg-b2 rounded p-6 sm:p-10 md:p-15 w-[90%] h-[90vh] lg:w-[80%] xxl:w-[60%] mx-auto overflow-y-auto relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span
                            className="close absolute top-5 right-5 text-3xl text-w1 hover:text-p1 duration-300 cursor-pointer"
                            onClick={closeModal}
                        >
                            &times;
                        </span>

                        <div className="flex flex-col gap-3 md:gap-5 mt-5 md:mt-8 lg:mt-10">
                            <h3 className="text-w1 text-4xl">{currentProject.title}</h3>
                            <Image
                                src={currentProject.image}
                                alt={currentProject.title}
                                width={1000}
                                height={600}
                                className="w-full md:h-[400px] rounded border border-w1/30 object-cover"
                            />

                            <div className="mt-5 md:mt-8">
                                <h3 className="text-w1 text-2xl">Overview</h3>
                                <p className="text-w1/80 text-base md:text-lg lg:text-xl">
                                    {currentProject.overview}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-w1 text-2xl">Project Goals</h3>
                                <p className="text-w1/80 text-base md:text-lg lg:text-xl">
                                    {currentProject.description}
                                </p>

                                <ul className="list-disc list-inside text-w1/80 text-base lg:text-lg mt-2 md:mt-3">
                                    {currentProject.goals.map((goal, i) => (
                                        <li key={i}>{goal}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-w1 text-2xl">Challenges and Solutions</h3>
                                <p className="text-w1/80 text-base md:text-lg lg:text-xl">
                                    {currentProject.challenges}
                                </p>

                                {/* <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-5 mt-2 md:mt-3">
                                    <div>
                                        <Image
                                            src="/assets/images/project2.png"
                                            alt="Project detail"
                                            width={500}
                                            height={300}
                                            className="rounded"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/assets/images/project3.png"
                                            alt="Project detail"
                                            width={500}
                                            height={300}
                                            className="rounded"
                                        />
                                    </div>
                                </div> */}
                            </div>

                            <div>
                                <h3 className="text-w1 text-2xl">Key Features:</h3>
                                <p className="text-w1/80 text-base md:text-lg lg:text-xl">
                                    {currentProject.description}
                                </p>

                                <ul className="list-disc list-inside text-w1/80 text-base lg:text-lg mt-2 md:mt-3">
                                    {currentProject.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-w1 text-2xl">Outcome:</h3>
                                <p className="text-w1/80 text-base md:text-lg lg:text-xl">
                                    {currentProject.outcome}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Work;