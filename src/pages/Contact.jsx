const Contact = () => {
  return (
    <section className="contact" >
    <header>
      <h2 className="h2 article-title">Contacts Page</h2>
    </header>
    <section className="mapbox"> 
        <figure>
       
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71736.70031205575!2d72.88393895139475!3d19.099060720264323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713124896273!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </figure>
    </section>
    <section className="contact-form">

<h3 className="h3 form-title">Contact Form</h3>

<form action="#" className="form" data-form>

  <div className="input-wrapper">
    <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

    <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
  </div>

  <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

  <button className="form-btn" type="submit" data-form-btn>
    <ion-icon name="paper-plane"></ion-icon>
    <span>Send Message</span>
  </button>

</form>

</section>
    </section>
  )
}

export default Contact