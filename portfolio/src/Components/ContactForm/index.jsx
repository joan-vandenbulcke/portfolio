import './styles.scss';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { BsSendFill } from "react-icons/bs";

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3w3e56f', 'template_l5rtd81', form.current, 'D_JgUWxgbAYHBBUFR')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <section className='form'>
      <h3 className='form-title'><span className='numbers-span'>05.</span>Contact</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className='form-item'>
          <label>Name</label>
          <input type="text" name="from_name" />
        </div>
        <div className='form-item'>
          <label>Email</label>
          <input type="email" name="from_email" />
        </div>
        <div className='form-item'>
          <label>Message</label>
          <textarea name="message" />
        </div>
        <button className='form-button' type="submit">Send <BsSendFill /></button>
      </form>
    </section>
  )
}

export default ContactForm