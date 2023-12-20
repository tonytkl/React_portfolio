import { Container, Row } from 'react-bootstrap';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';

function Contact() {
    return <Container className='sections' id='contact'>
        <Row className='p-5'>
            <h2 className='secondaryHeader'>Let's get in touch</h2>
            <ContactForm />
        </Row>
    </Container>
}

export const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully! Thank you for your message.')
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name" placeholder='Name' required/>
      <input type="email" name="from_email" placeholder='Email' required/>
      <input type="text" name="subject" placeholder='Subject' required/>
      <textarea name="message" placeholder='Message' required/>
      <Button variant="primary" type="submit">
              Submit
          </Button>
    </form>
  );
};

export default Contact;