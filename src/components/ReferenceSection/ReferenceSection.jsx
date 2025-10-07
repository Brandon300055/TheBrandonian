import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactModal from '../ContactModal/ContactModal';
import './ReferenceSection.css';

const ReferenceSection = () => {
  const [inViewRef, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const parallaxRef = useRef(null);
  const sectionRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const setRefs = (element) => {
    sectionRef.current = element;
    inViewRef(element);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const scrolled = window.scrollY;
        const offset = (scrolled - sectionTop) * 0.3;
        parallaxRef.current.style.transform = `translate3d(0px, ${offset}px, 0px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const references = [
    {
      name: 'Ryan Farran',
      title: 'CTO, Farran Media.',
      relationship: 'Former Boss',
      email: 'cndhcnJhbkBnbWFpbC5jb20=', // Base64 encoded
      phone: 'NDgwLTczNC02NDUw', // Base64 encoded
      phoneLink: 'NDgwNzM0NjQ1MA==', // Base64 encoded
      company: 'Farran Media',
      companySub: 'Media & Technology',
      details: 'Direct supervisor, oversaw technical projects.'
    },
    {
      name: 'Andrei Doroshin',
      title: 'CEO, Popularis Health',
      relationship: 'Former Boss',
      email: 'YW5kcmVpQHBvcHVsYXJpc2hlYWx0aC5jb20=', // Base64 encoded
      phone: 'MjE1LTY5NC03Nzg4', // Base64 encoded
      phoneLink: 'MjE1Njk0Nzc4OA==', // Base64 encoded
      company: 'Popularis Health',
      companySub: 'Healthcare Innovation',
      details: 'Direct supervisor, oversaw technical projects'
    },
    {
      name: 'Nick Avanaus',
      title: 'Software Engineer',
      relationship: 'Colleague',
      email: '', // Empty email
      phone: 'NjAyLTczOC04MTM3', // Base64 encoded
      phoneLink: 'NjAyNzM4ODEzNw==', // Base64 encoded
      company: 'Farran Media',
      companySub: 'Engineering',
      details: 'Collaborated on multiple full-stack projects'
    },
    {
      name: 'Stack Overflow',
      title: 'Developer Community',
      relationship: 'Active Contributor',
      details: 'Proven expertise in problem-solving and actively helping developers worldwide',
      link: 'https://stackoverflow.com/users/7274675/brandon-stewart',
      isExternal: true
    }
  ];

  const handleContactClick = (contact) => {
    // Decode the contact info when opening modal
    if (contact && !contact.isExternal) {
      const decodedContact = {
        ...contact,
        email: contact.email ? atob(contact.email) : '',
        phone: contact.phone ? atob(contact.phone) : '',
        phoneLink: contact.phoneLink ? atob(contact.phoneLink) : ''
      };
      setSelectedContact(decodedContact);
    } else {
      setSelectedContact(contact);
    }
    setIsModalOpen(true);
  };

  return (
    <section id="sec7" className="scroll-con-sec" ref={setRefs}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>References</h2>
          <p>
            "The first method for estimating the intelligence of a ruler is to look at the men he has around him"
            -Machiavelli
          </p>
          <div className="clearfix"></div>
          <span className="bold-separator"></span>
        </motion.div>

        <div className="references-list">
          {references.map((reference, index) => (
            <motion.div
              key={index}
              className="reference-row"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="reference-content">
                <div className="reference-info">
                  <h3 className="ref-name">{reference.name}</h3>
                  <p className="ref-title">{reference.title}</p>
                  <span className="ref-badge">{reference.relationship}</span>
                </div>
                <div className="reference-details">
                  <p className="ref-detail-text">{reference.details}</p>
                </div>
              </div>
              <div className="reference-action">
                {reference.isExternal ? (
                  <a
                    href={reference.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ref-button external"
                  >
                    <i className="fab fa-stack-overflow"></i>
                    View Profile
                  </a>
                ) : (
                  <button
                    className="ref-button"
                    onClick={() => handleContactClick(reference)}
                  >
                    <i className="fa fa-address-card"></i>
                    Contact Info
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="order-wrap fl-wrap color-bg" style={{ marginTop: '60px' }}>
          <div className="row">
            <div className="col-md-8">
              <h4>Let me know if you want to work together</h4>
            </div>
            <div className="col-md-4">
              <button
                className="ord-link openModal"
                onClick={() => handleContactClick(null)}
              >
                Take My Card
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="parallax-title right-pos" ref={parallaxRef}>Reference</div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        contactInfo={selectedContact}
      />
    </section>
  );
};

export default ReferenceSection;