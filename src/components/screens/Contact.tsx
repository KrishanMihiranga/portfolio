import { useState } from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

const Contact: React.FC = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      const t2 = gsap.timeline()

      t1.from(["#cfn", "#cln", "#crole", "#cmail", "#cs1", "#cs2", "#cs3", "#cs4", "#cs5", "#cdesc",], {
        opacity: 0,
        y: "+=30",
        stagger: 0.1,
      });
      t2.from(["#cin", "#cie", "#cis", "#cim", "#cib",], {
        opacity: 0,
        y: "+=30",
        stagger: 0.1,
      });
    }, comp)

    return () => ctx.revert()
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const newErrors = { name: '', email: '', subject: '', message: '' };

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log('Form submitted:', formData);

      const formDataObject = new FormData();
      formDataObject.append('name', formData.name);
      formDataObject.append('email', formData.email);
      formDataObject.append('subject', formData.subject);
      formDataObject.append('message', formData.message);

      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwrxOo1RH7hXm2LBIFBiV0UNOxoEJ9gc6tyza6pYKQbM5HvAZoAMgbfY0xYAdE0U7jP/exec', {
          method: 'POST',
          body: formDataObject,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.text(); 
        console.log('Success:', result);

        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };



  return (
    <div className="flex flex-col justify-center w-full px-4 text-white mt-28 pb-36 md:px-24 md:h-screen" ref={comp}>
      <div className="flex flex-col items-center justify-center w-full h-full gap-10 md:flex-row">
        {/* Personal Information Section */}
        <div className="flex flex-col items-center w-full gap-4 text-center md:w-1/2">
          <div className="text-6xl tracking-wider text-white md:text-9xl font-ArabicSignature" id="cfn">
            Krishan
          </div>
          <div className="text-6xl tracking-wider text-white md:text-9xl font-ArabicSignature" id="cln">
            Mihiranga
          </div>
          <div className="text-xl text-regular" id="crole">Fullstack Developer</div>
          <div className='text-sm text-gray-500 ' id='cmail'>krishanmdev@gmail.com</div>
          <div className="flex flex-row gap-4 text-2xl text-gray-400 md:text-3xl">
            <a id="cs1" href='https://github.com/KrishanMihiranga' target='_blank'><FaGithub className='cursor-pointer customText' aria-label="GitHub" /></a>
            <a id="cs2" href='https://www.instagram.com/krishanm404?igsh=Z3psdmNiYjRoanE3' target='_blank'><FaInstagram className='cursor-pointer customText' aria-label="Instagram" /></a>
            <a id="cs3" href='https://www.linkedin.com/in/krishanmb/' target='_blank'><FaLinkedin className='cursor-pointer customText' aria-label="LinkedIn" /></a>
            <a id="cs4" href='https://wa.me/+94774512029' target='_blank'><FaWhatsapp className='cursor-pointer customText' aria-label="WhatsApp" /></a>
            <a id="cs5" href='mailto:krishanmdev@gmail.com' target='_blank'><FaEnvelope className='cursor-pointer customText' aria-label="Email" /></a>
          </div>
          <div className="text-base text-gray-500 w-full md:w-[80%]" id="cdesc">
            Software Engineering Undergrad, aspiring Full-Stack Developer. Building a versatile skill set for a dynamic tech future. Connect with me!
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex items-center justify-center w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="w-full p-4 md:p-8">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 bg-transparent border rounded-lg focus:outline-none focus:ring-2 focus:ring-white ${errors.name ? 'border-red-600' : 'border-gray-600'}`}
                aria-label="Name"
                id="cin"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 bg-transparent border rounded-lg focus:outline-none focus:ring-2 focus:ring-white ${errors.email ? 'border-red-600' : 'border-gray-600'}`}
                aria-label="Email"
                id="cie"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full p-3 bg-transparent border rounded-lg focus:outline-none focus:ring-2 focus:ring-white ${errors.subject ? 'border-red-600' : 'border-gray-600'}`}
                aria-label="Subject"
                id="cis"
              />
              {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full h-32 p-3 bg-transparent border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-white ${errors.message ? 'border-red-600' : 'border-gray-600'}`}
                aria-label="Message"
                id="cim"
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full px-5 py-3 text-lg tracking-widest text-black bg-white rounded-md bg-opacity-80 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-white font-GeistRegular"
                id="cib"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}

export default Contact;
