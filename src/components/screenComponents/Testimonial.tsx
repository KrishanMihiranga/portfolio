import pubudu from '../../assets/images/pubudu.jpeg';
import yuki from '../../assets/images/yuki.jpeg';
import januth from '../../assets/images/januth.jpeg';
import vishwa from '../../assets/images/vishwa.jpeg';
import { FaLinkedin } from 'react-icons/fa';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface TestimonialData {
    image: string;
    name: string;
    possesion: string;
    message: string;
    url: string;
}

const Testimonialdata: TestimonialData[] = [
    {
        image: pubudu,
        name: 'Pubudu Samarakoon',
        possesion: '3D Generalist',
        message: 'Krishan is a talented front-end developer with a keen eye for design, delivering high-quality, responsive interfaces. Their passion for learning, problem-solving, and effective collaboration makes them a valuable asset to any project team.',
        url: 'https://www.linkedin.com/in/pubudu-samarakoon-50a935202/',
    },
    {
        image: januth,
        name: 'Januth Basura',
        possesion: 'Undergraduate @ AMDT',
        message: 'I strongly recommend Krishan Mihiranga for his excellent management of college initiatives. His strategic thinking, dedication, and ability to inspire the team were key to our success, making him an invaluable leader in any endeavor.',
        url: 'https://www.linkedin.com/in/januthbasura/',
    },
    {
        image: yuki,
        name: 'Shehal Herath',
        possesion: 'Undergraduate @ NIBM',
        message: `I've worked closely with Krishan on many projects. Their technical skills, collaborative spirit, and dedication are impressive. As a friend and professional, Krishan is reliable and an invaluable asset to any software team.`,
        url: 'https://www.linkedin.com/in/shehaldev/',
    },
    {
        image: vishwa,
        name: 'Vishwa Wickramasuriya',
        possesion: '3D Modeller',
        message: `I sought advice for my portfolio website, and he shared invaluable ideas. He's the best consultant I've spoken to. I'll definitely contact him to build my website later on.`,
        url: 'https://www.linkedin.com/in/vishwa-wickramasuriya-b06b83296/',
    },
];

const Testimonial: React.FC = () => {
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        cardsRef.current.forEach((cardEl) => {
            if (cardEl) {
                gsap.fromTo(cardEl,
                    { opacity: 0, y: "+=30" },
                    {
                        opacity: 1, duration: 1, y: "0",
                        scrollTrigger: {
                            trigger: cardEl,
                            start: "top bottom",
                            end: "bottom top",
                        }
                    }
                );
            }
        });
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-10">
            {Testimonialdata.map((testimonial, index) => (
                <div
                    key={index}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="flex flex-col max-w-xs gap-3 p-5 text-white border border-gray-500 rounded-lg sm:max-w-sm md:max-w-md lg:max-w-lg"
                >
                    <div className="flex flex-row items-start justify-between">
                        <div className="flex flex-row items-start justify-start gap-3">
                            <img src={testimonial.image} alt="image" className="w-12 rounded-full"/>
                            <div>
                                <div className="text-base text-gray-300">{testimonial.name}</div>
                                <div className="text-sm text-gray-500">{testimonial.possesion}</div>
                            </div>
                        </div>
                        <a href={testimonial.url} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={22} className="text-gray-500 cursor-pointer customText" />
                        </a>
                    </div>
                    <div className="text-gray-300">
                        {testimonial.message}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonial;
