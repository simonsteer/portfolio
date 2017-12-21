import React from 'react'

const Contact = () => {
  return (
    <section className="contact">
      <div className="wrapper">
        <h1 className="section__h1">Projects</h1>
        <div className="slide-up">
          <h2 className="contact__h2">Let's make something beautiful together.</h2>
          <a className="contact__link" href="mailto:simon@simonsteer.com">simon@simonsteer.com</a>
        </div>
        <div>
          <img src="public/assets/images/me.svg" alt="line drawing of a man leaning to the side" className="slide-from-left" />
          <form className="contact__form slide-from-right" method="POST" action="https://formspree.io/simon@simonsteer.com">
            <input type="text" placeholder="enter your email here" name="email" />
            <textarea name="message" placeholder="enter your message here"></textarea>
            <button>send email</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact