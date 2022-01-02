import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get all the latest stories to your inbox</h2>
          <h4>I write to my digital friends every week.</h4>
          <form
            className="contact-form"
            name="contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            {/* two hidden inputs for netlify form */}
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <input
              type="text"
              name="nameInput"
              placeholder="Your name"
              className="form-control"
            />
            <input
              type="email"
              name="emailInput"
              placeholder="Your email"
              className="form-control"
            />
            <input
              type="text"
              name="messageInput"
              placeholder="Your message"
              className="form-control"
            />
            <button className="btn form-control submit-btn" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
