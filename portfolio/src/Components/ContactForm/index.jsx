import './styles.scss';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
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
  // ------------- SUCCESS MESSAGE --------------------
  const [isSuccessMessage, setIsSuccessMessage] = useState([]);

  const Message = () => (
    <p>Votre message a bien été envoyé</p>
  )

  const successMessage = (e) => {
    console.log('Votre message a bien été envoyé');
    setIsSuccessMessage(isSuccessMessage.concat(<Message key={isSuccessMessage.length} />));
  }

  return (
    <section className='form'>
      <h3 className='form-title'><span className='numbers-span'>05.</span>Contact</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className='form-item'>
          <label><span className='form-span'>*</span> Name</label>
          <input required type="text" name="from_name" />
        </div>
        <div className='form-item'>
          <label><span className='form-span'>*</span> Email</label>
          <input required type="email" name="from_email" />
        </div>
        <div className='form-item'>
          <label><span className='form-span'>*</span> Message</label>
          <textarea required name="message" />
        </div>
        <button onClick={successMessage} className='form-button' type="submit">Send <BsSendFill /></button>
        {Message}
      </form>
    </section>
  )
}

export default ContactForm