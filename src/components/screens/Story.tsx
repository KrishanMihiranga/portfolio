import storyImg from '../../assets/images/story.jpg';
import awardceo from '../../assets/images/awardceo.jpg';
import awardsv from '../../assets/images/awardsv.jpg';
import group from '../../assets/images/group.jpg';
import batch from '../../assets/images/gdse65.jpg';
import Testimonial from '../screenComponents/Testimonial';
import { useLayoutEffect, useRef, useState } from 'react';
import Popup from '../screenComponents/Popup';
import { FaCircle } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Story: React.FC = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const comp = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const titleEl = titleRef.current;
        const subtitleEl = subtitleRef.current;

        gsap.fromTo(titleEl,
            { opacity: 0, y: "+=30" },
            {
                opacity: 1, duration: 1, y: "0",
                scrollTrigger: {
                    trigger: titleEl,
                    start: "top bottom",
                    end: "bottom top",
                }
            }
        );

        gsap.fromTo(subtitleEl,
            { opacity: 0, y: "+=30" },
            {
                opacity: 1, duration: 1, y: "0",
                scrollTrigger: {
                    trigger: subtitleEl,
                    start: "top bottom",
                    end: "bottom top",
                }
            }
        );

        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.from(["#storyt1", "#storyt2", "#imgstory", "#storyfpt", "#storyfpd"], {
                opacity: 0,
                y: "+=30",
                stagger: 0.1,
            }).from(["#img1", "#img2", "#img3", "#img4"], {
                opacity: 0,
                y: "+=30",
                stagger: 0.1,
            });
        }, comp);

        return () => ctx.revert();
    }, []);

    const [popupImage, setPopupImage] = useState<string>('');

    const handleImageClick = (src: string) => {
        setPopupImage(src);
    };

    const handleClosePopup = () => {
        setPopupImage('');
    };

    return (
        <div className="flex flex-col w-full px-4 mt-32" ref={comp}>
            <div className="flex flex-col items-center justify-center h-full px-4 mx-auto md:mx-10">
                <div className="text-3xl text-center md:text-5xl text-regular" id='storyt2'>Do what you love, love what you do</div>
            </div>
            <div className="flex flex-col items-start justify-around h-full p-4 mx-auto mt-10 text-white md:flex-row md:p-10 md:mx-10">
                <div className='w-full md:w-[60%]'>
                    <div className='text-lg text-gray-400 font-[500]' id='storyfpt'>Footprints</div>
                    <div className='pl-4 md:pl-10' id='storyfpd'>
                        <ul className='text-gray-300 '>
                            <li className='flex flex-row items-start gap-2 my-5'>
                                <FaCircle size={10} className="flex-shrink-0" />
                                <span className='relative -top-2'>Started my educational journey at Shasthrodaya Pre-School Bandaragama (Ages 5-6).</span>
                            </li>
                            <li className='flex flex-row items-start gap-2 my-5'>
                                <FaCircle size={10} className="flex-shrink-0" />
                                <span className='relative -top-2'>Attended Bandaragama Central College from Grades 1 to 5.</span>
                            </li>
                            <li className='flex flex-row items-start gap-2 my-5'>
                                <FaCircle size={10} className="flex-shrink-0" />
                                <span className='relative -top-2'>Passed the Scholarship Exam with flying colors.</span>
                            </li>
                            <li className='flex flex-row items-start gap-2 my-5'>
                                <FaCircle size={10} className="flex-shrink-0" />
                                <span className='relative -top-2'>Continued my studies at the same school for Grade 11.</span>
                            </li>
                            <li className='flex flex-row items-start gap-2 my-5'>
                                <FaCircle size={10} className="flex-shrink-0" />
                                <span className='relative -top-2'>Completed the Ordinary Level (OL) exams with impressive grades: A2s, B5s, and C2, earning a spot at Taxila Central College, Horana.</span>
                            </li>
                            <li className='flex flex-row items-start gap-2 my-5'>
                                <FaCircle size={10} className="flex-shrink-0" />
                                <span className='relative -top-2'>Excelled in the General Certificate of Education Advanced Level (GCE AL) exams with S2s and C1s in SFT, ET, IT, and General English.</span>
                            </li>
                            <li className='flex flex-row items-start gap-2 my-5'>
                                <FaCircle size={10} className="flex-shrink-0" />
                                <span className='relative -top-2'>Embarked on my long-held dream of becoming a software engineer, a goal I set back in Grade 5.</span>
                            </li>
                            <li className='flex flex-row items-start gap-2 mt-5 '>
                                <FaCircle size={10} className="flex-shrink-0" />
                                <span className='relative -top-2'>Enrolled in a Graduate Diploma program at IJSE (GDSE 65).</span>
                            </li>
                            <li className='flex flex-row items-start gap-2 mt-2'>
                                <img src={awardceo} alt="circleedge" className='w-16 rounded-md cursor-pointer md:w-20' onClick={() => handleImageClick(awardceo)} id='img1' />
                                <img src={awardsv} alt="circleedge" className='w-16 rounded-md cursor-pointer md:w-20' onClick={() => handleImageClick(awardsv)} id='img2' />
                                <img src={group} alt="circleedge" className='w-16 rounded-md cursor-pointer md:w-20' onClick={() => handleImageClick(group)} id='img3' />
                                <img src={batch} alt="circleedge" className='w-16 rounded-md cursor-pointer md:w-20' onClick={() => handleImageClick(batch)} id='img4' />
                            </li>
                            <li className='flex flex-row items-start gap-2 my-5 text-gray-500 blinking-text'>
                                <FaCircle size={10} className="flex-shrink-0" />
                                <span className='relative -top-2'>Graduated successfully from IJSE</span>
                            </li>
                        </ul>
                        {popupImage && <Popup imageSrc={popupImage} onClose={handleClosePopup} />}
                    </div>
                </div>
                <img src={storyImg} alt="image" className='w-full md:w-[28%] rounded-2xl mt-10 md:mt-0' id='imgstory' />
            </div>
            <div className='flex flex-col items-center justify-center text-center mt-28'>
                <div className='text-2xl md:text-5xl text-regular' ref={titleRef}> Don’t Just Take My Word for It !</div>
                <div className='text-base md:text-3xl text-regular' ref={subtitleRef}> Hear What Others Have to Say About Working with Me</div>
            </div>
            <div className='flex flex-row justify-center gap-10 my-20'>
                <Testimonial />
            </div>
        </div>
    )
}

export default Story;
