import './styles.scss';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { BsSendFill } from "react-icons/bs";

const ContactForm = () => {

  const [isSuccess, setIsSuccess] = useState("");
  const [isError, setIsError] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3w3e56f', 'template_l5rtd81', form.current, 'D_JgUWxgbAYHBBUFR')
      .then((result) => {
        console.log(result.text);
        return setIsSuccess("Votre message a bien été envoyé, je reviens vers vous au plus vite !")
      }, (error) => {
        console.log(error.text);
        return setIsError("Une erreur est survenue, essayez les moyens suivants pour me contacter :")
      });
  }

  return (
    <section id='contact' className='form'>
      <h2 className='form-title'><span className='numbers-span'>06.</span>Contact</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className='form-item'>
          <label><span className='form-span'>*</span> Name</label>
          <input placeholder='Prénom + Nom' required type="text" name="from_name" />
        </div>
        <div className='form-item'>
          <label><span className='form-span'>*</span> Email</label>
          <input placeholder='votremail@gmail.com' required type="email" name="from_email" />
        </div>
        <div className='form-item'>
          <label><span className='form-span'>*</span> Téléphone</label>
          <input placeholder='06 07 08 09 10' required type="phone" name="from_phone" />
        </div>
        <div className='form-item'>
          <label><span className='form-span'>*</span> Message</label>
          <textarea placeholder="N'hésitez pas à m'expliquer en détails la raison de votre venue sur mon site 😊" required name="message" />
        </div>
        <button className='form-button' type="submit">Send <BsSendFill /></button>
        <div className='error-message'>{isSuccess}</div>
        <div className='error-message'>{isError}</div>
      </form>
    </section>
  )
}

export default ContactForm