import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'
const ContactMe = () => {
  return (
   <section className='contact-container'>
    <h5>Contact Me</h5>

    <div className='contact-content'>
        <div style={{flex: 1}}>
          <ContactInfoCard 
          iconUrl={`${process.env.PUBLIC_URL}/assets/image/email.png`}
          text="gunjantiwari.gcsb@gmail.com"
          />
          <ContactInfoCard 
          iconUrl={`${process.env.PUBLIC_URL}/assets/image/github.png`}
          text="https://github.com/GunjanTiwari-web"
          />
        </div>
         <div style={{flex: 1}}>
            <ContactForm />
         </div>
    </div>
    </section>
  )
}

export default ContactMe