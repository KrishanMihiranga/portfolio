import kicks from '../../assets/images/kickshub.png';
import weave from '../../assets/images/weave.png';
import nike from '../../assets/images/nike.jpg';
import insta from '../../assets/images/instaclone.png';
import hope from '../../assets/images/Hope Logo.jpg';
import hopess from '../../assets/images/hopess.png';
import aquabuddy from '../../assets/images/aquabuddy.png';
import netflix from '../../assets/images/netflix.png';
import reservate from '../../assets/images/reservate.png';
import chatroom from '../../assets/images/chatroom.png';
import inrow from '../../assets/images/4inrow.png';
import stpw from '../../assets/images/stopwatch.png';
import card from '../../assets/images/card.png';
import card2 from '../../assets/images/card2.png';
import login from '../../assets/images/login.png';
import checkbox from '../../assets/images/checkbox.png';
import { FaJs, FaGithub, FaReact, FaNodeJs, FaLinkedin, FaAngleRight, FaHtml5, FaCss3, FaJava, FaDownload, FaUpRightFromSquare } from 'react-icons/fa6';
import { SiNextdotjs, SiSpringboot, SiJsonwebtokens, SiMongodb, SiClerk, SiTypescript, SiTailwindcss, SiExpo, SiMysql, SiArduino, SiFirebase } from 'react-icons/si';
import { RefObject, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Project = {
    url: string;
    date: string;
    name: string;
    links: {
        github: string;
        link: string;
        linkedin: string;
        drive: string;
    };
    description: string;
    techStack: string[];
    socials: string[];
};

const getIconComponent = (iconName: string) => {
    switch (iconName) {
        case 'FaJs':
            return <FaJs size={15} />;
        case 'FaReact':
            return <FaReact size={15} />;
        case 'FaNodeJs':
            return <FaNodeJs size={15} />;
        case 'FaHtml5':
            return <FaHtml5 size={15} />;
        case 'FaCss3':
            return <FaCss3 size={15} />;
        case 'FaJava':
            return <FaJava size={15} />;
        case 'FaDownload':
            return <FaDownload size={23} />;
        case 'FaGithub':
            return <FaGithub size={25} />;
        case 'FaUpRightFromSquare':
            return <FaUpRightFromSquare size={23} />;
        case 'SiNextdotjs':
            return <SiNextdotjs size={15} />;
        case 'SiSpringboot':
            return <SiSpringboot size={15} />;
        case 'SiJsonwebtokens':
            return <SiJsonwebtokens size={15} />;
        case 'SiMongodb':
            return <SiMongodb size={15} />;
        case 'SiClerk':
            return <SiClerk size={15} />;
        case 'SiTypescript':
            return <SiTypescript size={15} />;
        case 'SiTailwindcss':
            return <SiTailwindcss size={15} />;
        case 'SiExpo':
            return <SiExpo size={15} />;
        case 'SiMysql':
            return <SiMysql size={15} />;
        case 'SiArduino':
            return <SiArduino size={15} />;
        case 'SiFirebase':
            return <SiFirebase size={15} />;
        default:
            return null;
    }
};

const projectsData: Project[] = [
    {
        url: kicks,
        date: 'April 09, 2024',
        name: 'Kicks Hub',
        links: {
            github: 'https://github.com/KrishanMihiranga/kickshub',
            link: '',
            linkedin: '',
            drive: '',
        },
        description: 'I created a powerful web app to improve retail operations, including sales and inventory management, customer loyalty programs, secure employee data handling, and an easy-to-use interface with Spring Boot and MySQL.',
        techStack: ['FaHtml5', 'FaCss3', 'FaJs', 'FaJava', 'SiSpringboot', 'SiJsonwebtokens'],
        socials: ['FaGithub'],
    },
    {
        url: weave,
        date: 'Aug 03, 2024',
        name: 'Weave',
        links: {
            github: 'https://github.com/KrishanMihiranga/weave_app',
            link: 'https://weave-app-ten.vercel.app/',
            linkedin: '',
            drive: '',
        },
        description: 'Weave lets users post threads on private accounts or within organizations. Built with React and Next.js, it uses MongoDB for data storage and Clerk for Gmail/GitHub logins.',
        techStack: ['SiNextdotjs', 'FaReact', 'SiClerk', 'SiMongodb', 'SiTypescript', 'SiTailwindcss'],
        socials: ['FaGithub', 'FaUpRightFromSquare'],
    },
    {
        url: nike,
        date: 'Aug 03, 2024',
        name: 'Nike web',
        links: {
            github: 'https://github.com/KrishanMihiranga/Nike-clone',
            link: 'https://nike-web-mauve.vercel.app/',
            linkedin: '',
            drive: '',
        },
        description: 'A Nike landing page clone brought to life with ReactJS and Vite, showcasing the style finesse of Tailwind CSS. Immerse yourself in its sleek design and seamless responsiveness.',
        techStack: ['FaJs', 'FaReact', 'SiTailwindcss'],
        socials: ['FaGithub', 'FaUpRightFromSquare'],
    },
    {
        url: insta,
        date: 'Aug 03, 2024',
        name: 'Instagram clone',
        links: {
            github: 'https://github.com/KrishanMihiranga/instagram-clone',
            link: 'https://www.linkedin.com/feed/',
            linkedin: '',
            drive: 'https://drive.google.com/file/d/1RY0WT7WXM0C7ZjSBYUueRc9AOQP_1OKG/view?usp=sharing',
        },
        description: `Explore my Instagram clone mobile app built with React Native. Featuring only the UI, it's styled using NativeWind for a sleek and modern look, offering a visually stunning experience.`,
        techStack: ['FaReact', 'SiExpo', 'SiTypescript', 'SiTailwindcss'],
        socials: ['FaGithub', 'FaDownload'],
    },
    {
        url: netflix,
        date: 'Aug 03, 2024',
        name: 'Netflix clone',
        links: {
            github: 'https://github.com/KrishanMihiranga/Netflix-Clone',
            link: 'https://netflix-clone-flax-seven.vercel.app/',
            linkedin: '',
            drive: '',
        },
        description: 'Check out my Netflix clone app, developed using vanilla HTML and CSS. It features a sleek, modern UI, mimicking the original design, offering a visually appealing and responsive experience.',
        techStack: ['FaHtml5', 'FaCss3'],
        socials: ['FaGithub', 'FaUpRightFromSquare'],
    },
    {
        url: chatroom,
        date: 'Aug 03, 2024',
        name: 'Chat room',
        links: {
            github: 'https://github.com/KrishanMihiranga/chatroom-applcation',
            link: '',
            linkedin: '',
            drive: '',
        },
        description: 'Explore my chatroom application built with Java and socket programming. It provides real-time messaging features, allowing users to communicate seamlessly in a dynamic and interactive chat environment.',
        techStack: ['FaJava'],
        socials: ['FaGithub'],
    },
    {
        url: reservate,
        date: 'Aug 03, 2024',
        name: 'Reservate',
        links: {
            github: 'https://github.com/KrishanMihiranga/reservate-Layered',
            link: '',
            linkedin: '',
            drive: '',
        },
        description: 'Discover my modern hotel management POS system, designed with layered architecture. It offers efficient handling of reservations, check-ins, and billing, ensuring a streamlined and organized hotel management experience.',
        techStack: ['FaJava', 'SiMysql'],
        socials: ['FaGithub'],
    },
    {
        url: aquabuddy,
        date: 'Aug 03, 2024',
        name: 'Aqua buddy',
        links: {
            github: 'https://github.com/KrishanMihiranga/Soysa-Aquarium',
            link: '',
            linkedin: '',
            drive: '',
        },
        description: 'At the Innovesta event organized by IJSE, our group developed aquarium monitoring software using MVC architecture. It integrates pH and temperature sensors to maintain optimal conditions for aquatic life, ensuring a healthy environment.',
        techStack: ['FaJava', 'SiMysql', 'SiArduino'],
        socials: ['FaGithub'],
    },
];

const otherProjects: Project[] = [
    {
        url: inrow,
        date: 'Aug 03, 2024',
        name: 'Connect 4',
        links: {
            github: 'https://github.com/KrishanMihiranga/connect-four-game',
            link: 'https://www.linkedin.com/feed/',
            linkedin: '',
            drive: '',
        },
        description: 'Designed in Java, my Connect 4 game employs the Min-Max algorithm for intelligent AI moves, ensuring challenging and strategic gameplay.Java Connect 4 game, strategic AI.',
        techStack: ['FaJava'],
        socials: ['FaGithub'],
    },
    {
        url: stpw,
        date: 'Aug 03, 2024',
        name: 'Stop Watch',
        links: {
            github: 'https://github.com/KrishanMihiranga/stopWatch-javaFX',
            link: 'https://www.linkedin.com/feed/',
            linkedin: '',
            drive: '',
        },
        description: 'Using JavaFX, I designed a functional stopwatch application. It accurately tracks time, features start/pause/reset controls, and offers a user-friendly interface.JavaFX stopwatch tracks time precisely.',
        techStack: ['FaJava'],
        socials: ['FaGithub'],
    },
    {
        url: card,
        date: 'Aug 03, 2024',
        name: 'Interactive Card',
        links: {
            github: 'https://github.com/KrishanMihiranga/interactive-card',
            link: 'https://codepen.io/Mkrishan/pen/zYyrBZb',
            linkedin: '',
            drive: '',
        },
        description: `Fashioned using HTML/CSS, my interactive card seamlessly merges text, images, and buttons. Enhanced by CSS animations, it's engaging & functional for dynamic websites.`,
        techStack: ['FaHtml5', 'FaCss3'],
        socials: ['FaGithub', 'FaUpRightFromSquare'],
    },
    {
        url: checkbox,
        date: 'Aug 03, 2024',
        name: 'Animated Checkbox',
        links: {
            github: 'https://github.com/KrishanMihiranga/glowing-checkbox',
            link: 'https://codepen.io/Mkrishan/pen/oNQOomx',
            linkedin: '',
            drive: '',
        },
        description: 'Designed using HTML/CSS, my glowing checkbox adds flair to forms. When selected, it emits a subtle, visually appealing glow effect.CSS-powered checkbox glows elegantly when clicked.',
        techStack: ['FaHtml5', 'FaCss3',],
        socials: ['FaGithub', 'FaUpRightFromSquare'],
    },
    {
        url: card2,
        date: 'Aug 03, 2024',
        name: 'Profile card',
        links: {
            github: 'https://github.com/KrishanMihiranga/animated-profile-card',
            link: 'https://codepen.io/Mkrishan/pen/OJoyRBd',
            linkedin: '',
            drive: '',
        },
        description: 'Crafted with HTML/CSS, my animated profile card comes to life with captivating animations, showcasing information dynamically.CSS-animated profile card displays creativity.',
        techStack: ['FaHtml5', 'FaCss3',],
        socials: ['FaGithub', 'FaUpRightFromSquare'],
    },
    {
        url: login,
        date: 'Aug 03, 2024',
        name: 'Animated Login',
        links: {
            github: 'https://github.com/KrishanMihiranga/AnimatedLoginform-javaFX',
            link: 'https://www.linkedin.com/feed/',
            linkedin: '',
            drive: '',
        },
        description: 'Using JavaFX, I created an animated login interface that blends aesthetics and functionality, ensuring engaging user interactions and seamless authentication.Dynamic JavaFX login.',
        techStack: ['FaJava'],
        socials: ['FaGithub'],
    },
]

const ProjectCard = () => {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    const wroktop: RefObject<HTMLDivElement> = useRef(null);

    useLayoutEffect(() => {
        const worktop = wroktop.current;

        gsap.fromTo(worktop,
            { opacity: 0, y: "+=30" },
            {
                opacity: 1, duration: 1, y: "0",
                scrollTrigger: {
                    trigger: worktop,
                    start: "top bottom",
                    end: "bottom top",
                }
            }
        );

        refs.current.forEach((ref) => {
            gsap.fromTo(ref,
                { opacity: 0, y: "+=30" },
                {
                    opacity: 1, duration: 1, y: "0",
                    scrollTrigger: {
                        trigger: ref,
                        start: "top bottom",
                        end: "bottom top",
                    }
                }
            );
        });

    }, []);
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full px-4 my-10 md:px-32 mt-28" ref={wroktop}>
                <div className="flex flex-col items-center justify-between w-full p-6 border border-gray-600 rounded-lg shadow-lg md:flex-row">
                    <div className="flex flex-col w-2/3 pr-0 mb-4 md:pr-8 md:mb-0">
                        <h2 className="text-4xl md:text-6xl text-regular ">Awarded Project</h2>
                        <div className='mb-2 blinking-text'>Under Development</div>
                        <p className="text-gray-400">
                            This project, HOPE, is designed to streamline emergency reporting to the police, making it faster and more efficient than calling 119. Users can easily send alerts with attached assets, such as images and videos, providing critical context. The admin dashboard allows for quick assignment of officers to specific alerts, ensuring prompt responses. Three months ago, we joined the competition as Matrix. After several milestones and elimination rounds, we made it to the finals of Circle Edge, an inter-university competition organized by {<a href='https://www.ijse.lk/' target='_blank' className='font-bold tracking-wider text-gray-300 customText'>IJSE </a>}, where our Emergency Alert System project won us the competition.
                        </p>
                        <div className='flex flex-row items-center gap-2 mt-2'>
                            <a href='https://www.linkedin.com/posts/institute-of-software-engineering_circleedge-itinnovation-winners-activity-7223576785907593216-EVF4?utm_source=share&utm_medium=member_desktop' target="_blank" rel="noopener noreferrer" className='cursor-pointer customText'>
                                <FaLinkedin size={25} />
                            </a>
                            <a href='https://drive.google.com/file/d/12kw5w7GQZZ-lBrj0DaYRFbl7oM63W4TV/view?usp=sharing' download={true} target="_blank" rel="noopener noreferrer" className='cursor-pointer customText'>
                                <FaDownload size={23} />
                            </a>
                        </div>
                        <div className='mt-1 text-sm text-gray-500'>July 27, 2024</div>
                        <div className='flex flex-row gap-2 mt-2'>
                            <FaReact size={20} /><SiTypescript size={20} /><SiTailwindcss size={20} /><SiFirebase size={20} /><SiNextdotjs size={20} /><SiMongodb size={20} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-end w-full space-y-4 md:flex-row md:w-1/2 md:space-y-0 md:space-x-4">
                        <img src={hopess} alt="hope" className="object-cover w-full rounded-md md:w-1/2" />
                        <img src={hope} alt="hope" className="object-contain w-full rounded-md md:w-1/3" />
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap justify-center gap-10'>
                {projectsData.map((project, index) => (
                    <div className='max-w-sm' key={index} ref={el => refs.current[index] = el}>
                        <div>
                            <img src={project.url} alt="project Image" className='max-w-sm rounded-lg' />
                        </div>
                        <div className='flex flex-row items-center justify-between px-2 mt-1 text-sm'>
                            <div>{project.date}</div>
                        </div>
                        <div className='flex flex-row items-center justify-between px-2 text-2xl text-regular'>
                            <div className='text-white'>{project.name}</div>
                            <div className='flex flex-row gap-2'>
                                {project.socials.map((social, index) => (
                                    social === 'FaGithub' ? (

                                        <a key={index} href={project.links.github} target='_blank' className='cursor-pointer customText'>{getIconComponent(social)}</a>
                                    ) :
                                        social === 'FaUpRightFromSquare' ? (

                                            <a key={index} href={project.links.link} target='_blank' className='cursor-pointer customText'>{getIconComponent(social)}</a>
                                        ) :
                                            social === 'FaLinkedin' ? (

                                                <a key={index} href={project.links.linkedin} target='_blank' className='cursor-pointer customText'>{getIconComponent(social)}</a>
                                            ) :
                                                social === 'FaDownload' ? (

                                                    <a key={index} href={project.links.drive} target='_blank' download={true} className='cursor-pointer customText'>{getIconComponent(social)}</a>
                                                ) : null
                                ))}
                            </div>
                        </div>
                        <div className='px-2 mt-1 mb-2 text-sm'>
                            <p>{project.description}</p>
                        </div>
                        <div className='flex flex-row gap-1 px-2'>
                            {project.techStack.map((tech, index) => (
                                <div key={index}>{getIconComponent(tech)}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <hr className='mx-20 my-20 border-t border-dashed border-t-gray-500' />

            <div className='flex flex-wrap justify-center gap-10 pb-10 mt-10'>
                {otherProjects.map((project, index) => (
                    <div key={index} className='flex flex-col p-5 text-gray-500 border border-gray-600 rounded-lg shadow-lg max-w-s sm:max-w-sm md:max-w-md lg:max-w-lg' ref={el => refs.current[projectsData.length + index] = el}>
                        <div className='flex flex-row'>
                            <div className='flex-shrink-0 w-32 mr-4 overflow-hidden border border-gray-500 rounded-lg'>
                                <img src={project.url} alt="other_project_image" className='object-cover w-full h-full' />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <div className='flex flex-row items-center justify-between text-2xl text-white text-regular'>
                                    {project.name}
                                    <div className='flex flex-row mt-2 space-x-2 text-gray-500'>
                                        {project.techStack.map((tech, index) => (
                                            <div key={index}>{getIconComponent(tech)}</div>
                                        ))}
                                    </div>
                                </div>
                                <p className='text-sm text-gray-500'>{project.description}</p>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between mt-3'>
                            <div>
                                <h1 className='text-sm text-gray-500'>{project.date}</h1>
                            </div>
                            <div className='flex flex-row items-center gap-4'>
                                {project.socials.map((social, index) => (
                                    social === 'FaGithub' ? (

                                        <a key={index} href={project.links.github} target='_blank' className='cursor-pointer customText'>{getIconComponent(social)}</a>
                                    ) :
                                        social === 'FaUpRightFromSquare' ? (

                                            <a key={index} href={project.links.link} target='_blank' className='cursor-pointer customText'>{getIconComponent(social)}</a>
                                        ) :
                                            social === 'FaLinkedin' ? (

                                                <a key={index} href={project.links.linkedin} target='_blank' className='cursor-pointer customText'>{getIconComponent(social)}</a>
                                            ) :
                                                social === 'FaDownload' ? (

                                                    <a key={index} href={project.links.drive} target='_blank' className='cursor-pointer customText'>{getIconComponent(social)}</a>
                                                ) : null
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex flex-row items-center justify-end gap-1 px-5 mt-5 cursor-pointer md:px-20 mb-36 text-regular customText'>
                <div><a href="https://github.com/KrishanMihiranga" target='_blank'>see more</a></div>
                <div><FaAngleRight /></div>
            </div>
            <div className='text-transparent'>Hello</div>
        </>
    );
};

export default ProjectCard;
