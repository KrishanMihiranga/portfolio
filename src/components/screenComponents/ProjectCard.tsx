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
import { FaJs, FaGithub, FaReact, FaNodeJs, FaLinkedin, FaAngleRight } from 'react-icons/fa6';
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
        linkedin: string;
    };
    description: string;
    techStack: string[];
};

const getIconComponent = (iconName: string) => {
    switch (iconName) {
        case 'FaJs':
            return <FaJs size={15} />;
        case 'FaReact':
            return <FaReact size={15} />;
        case 'FaNodeJs':
            return <FaNodeJs size={15} />;
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
            linkedin: 'https://www.linkedin.com/feed/',
        },
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla ullam ab adipisci sunt magni eveniet, voluptates veritatis reprehenderit nam, dolor facilis numquam vel ratione optio quis doloremque harum dolorum.',
        techStack: ['FaJs', 'FaReact', 'FaNodeJs'],
    },
    {
        url: weave,
        date: 'Aug 03, 2024',
        name: 'Weave',
        links: {
            github: 'https://github.com/KrishanMihiranga/Weave_app_codebase',
            linkedin: 'https://www.linkedin.com/feed/',
        },
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla ullam ab adipisci sunt magni eveniet, voluptates veritatis reprehenderit nam, dolor facilis numquam vel ratione optio quis doloremque harum dolorum.',
        techStack: ['FaJs', 'FaReact', 'FaNodeJs'],
    },
    {
        url: nike,
        date: 'Aug 03, 2024',
        name: 'Nike web',
        links: {
            github: 'https://github.com/KrishanMihiranga/Weave_app_codebase',
            linkedin: 'https://www.linkedin.com/feed/',
        },
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla ullam ab adipisci sunt magni eveniet, voluptates veritatis reprehenderit nam, dolor facilis numquam vel ratione optio quis doloremque harum dolorum.',
        techStack: ['FaJs', 'FaReact', 'FaNodeJs'],
    },
    {
        url: insta,
        date: 'Aug 03, 2024',
        name: 'Instagram clone',
        links: {
            github: 'https://github.com/KrishanMihiranga/Weave_app_codebase',
            linkedin: 'https://www.linkedin.com/feed/',
        },
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla ullam ab adipisci sunt magni eveniet, voluptates veritatis reprehenderit nam, dolor facilis numquam vel ratione optio quis doloremque harum dolorum.',
        techStack: ['FaJs', 'FaReact', 'FaNodeJs'],
    },
    {
        url: netflix,
        date: 'Aug 03, 2024',
        name: 'Netflix clone',
        links: {
            github: 'https://github.com/KrishanMihiranga/Weave_app_codebase',
            linkedin: 'https://www.linkedin.com/feed/',
        },
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla ullam ab adipisci sunt magni eveniet, voluptates veritatis reprehenderit nam, dolor facilis numquam vel ratione optio quis doloremque harum dolorum.',
        techStack: ['FaJs', 'FaReact', 'FaNodeJs'],
    },
    {
        url: chatroom,
        date: 'Aug 03, 2024',
        name: 'Chat room',
        links: {
            github: 'https://github.com/KrishanMihiranga/Weave_app_codebase',
            linkedin: 'https://www.linkedin.com/feed/',
        },
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla ullam ab adipisci sunt magni eveniet, voluptates veritatis reprehenderit nam, dolor facilis numquam vel ratione optio quis doloremque harum dolorum.',
        techStack: ['FaJs', 'FaReact', 'FaNodeJs'],
    },
    {
        url: reservate,
        date: 'Aug 03, 2024',
        name: 'Reservate',
        links: {
            github: 'https://github.com/KrishanMihiranga/Weave_app_codebase',
            linkedin: 'https://www.linkedin.com/feed/',
        },
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla ullam ab adipisci sunt magni eveniet, voluptates veritatis reprehenderit nam, dolor facilis numquam vel ratione optio quis doloremque harum dolorum.',
        techStack: ['FaJs', 'FaReact', 'FaNodeJs'],
    },
    {
        url: aquabuddy,
        date: 'Aug 03, 2024',
        name: 'Aqua buddy',
        links: {
            github: 'https://github.com/KrishanMihiranga/Weave_app_codebase',
            linkedin: 'https://www.linkedin.com/feed/',
        },
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla ullam ab adipisci sunt magni eveniet, voluptates veritatis reprehenderit nam, dolor facilis numquam vel ratione optio quis doloremque harum dolorum.',
        techStack: ['FaJs', 'FaReact', 'FaNodeJs'],
    },
];

const otherProjects: Project[] = [
    {
        url: inrow,
        date: 'Aug 03, 2024',
        name: 'Connect 4',
        links: {
            github: 'https://github.com/KrishanMihiranga/Weave_app_codebase',
            linkedin: 'https://www.linkedin.com/feed/',
        },
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla ullam ab adipisci sunt magni eveniet, voluptates veritatis reprehenderit nam, dolor facilis numquam vel ratione optio quis doloremque harum dolorum.',
        techStack: ['FaJs', 'FaReact', 'FaNodeJs'],
    },
    {
        url: stpw,
        date: 'Aug 03, 2024',
        name: 'Stop Watch',
        links: {
            github: 'https://github.com/KrishanMihiranga/Weave_app_codebase',
            linkedin: 'https://www.linkedin.com/feed/',
        },
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla ullam ab adipisci sunt magni eveniet, voluptates veritatis reprehenderit nam, dolor facilis numquam vel ratione optio quis doloremque harum dolorum.',
        techStack: ['FaJs', 'FaReact', 'FaNodeJs'],
    },
    {
        url: card,
        date: 'Aug 03, 2024',
        name: 'Interactive Card',
        links: {
            github: 'https://github.com/KrishanMihiranga/Weave_app_codebase',
            linkedin: 'https://www.linkedin.com/feed/',
        },
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla ullam ab adipisci sunt magni eveniet, voluptates veritatis reprehenderit nam, dolor facilis numquam vel ratione optio quis doloremque harum dolorum.',
        techStack: ['FaJs', 'FaReact', 'FaNodeJs'],
    },
    {
        url: checkbox,
        date: 'Aug 03, 2024',
        name: 'Animated Checkbox',
        links: {
            github: 'https://github.com/KrishanMihiranga/Weave_app_codebase',
            linkedin: 'https://www.linkedin.com/feed/',
        },
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla ullam ab adipisci sunt magni eveniet, voluptates veritatis reprehenderit nam, dolor facilis numquam vel ratione optio quis doloremque harum dolorum.',
        techStack: ['FaJs', 'FaReact', 'FaNodeJs'],
    },
    {
        url: card2,
        date: 'Aug 03, 2024',
        name: 'Profile card',
        links: {
            github: 'https://github.com/KrishanMihiranga/Weave_app_codebase',
            linkedin: 'https://www.linkedin.com/feed/',
        },
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla ullam ab adipisci sunt magni eveniet, voluptates veritatis reprehenderit nam, dolor facilis numquam vel ratione optio quis doloremque harum dolorum.',
        techStack: ['FaJs', 'FaReact', 'FaNodeJs'],
    },
    {
        url: login,
        date: 'Aug 03, 2024',
        name: 'Animated Login',
        links: {
            github: 'https://github.com/KrishanMihiranga/Weave_app_codebase',
            linkedin: 'https://www.linkedin.com/feed/',
        },
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla ullam ab adipisci sunt magni eveniet, voluptates veritatis reprehenderit nam, dolor facilis numquam vel ratione optio quis doloremque harum dolorum.',
        techStack: ['FaJs', 'FaReact', 'FaNodeJs'],
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
                    <div className="flex flex-col pr-0 mb-4 md:pr-8 md:mb-0">
                        <h2 className="text-4xl md:text-6xl text-regular ">Awarded Project</h2>
                        <div className='mb-2 blinking-text'>Under Development</div>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae autem incidunt cumque dignissimos consectetur veritatis nihil optio. Nisi amet laborum nulla dolor aperiam quo? Velit in nam asperiores sint atque?
                        </p>
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
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className='cursor-pointer customText'><FaGithub size={25} /></a>
                                <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer" className='cursor-pointer customText'><FaGithub size={25} /></a>
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
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className='cursor-pointer customText'>
                                    <FaGithub size={25} />
                                </a>
                                <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer" className='cursor-pointer customText'>
                                    <FaLinkedin size={25} />
                                </a>
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
