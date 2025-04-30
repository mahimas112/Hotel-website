import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import ContactHero from './Contact/ContactHero';
import ContactForm from './Contact/Contact';

const Contact = () => {
  return (
    <>
    <ContactHero />
    <ContactForm/>
    </>
  );
};
export default Contact;