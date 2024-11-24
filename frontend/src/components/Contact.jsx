import "./styles/contact.css"

export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactHeaderBox">
        {/* <h1 className={contactHeader show}>
            Kontakt
          </h1> */}
        <div className={"contactIngress show"}>KOM I KONTAKT MED OSS</div>
      </div>
      <section className="contactSection">
        <div className="contactBox" id="contact">
          <div className="iframeContainer-wide">
            <iframe
              className="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30767.87699612734!2d10.686101816428504!3d59.88891751470016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416bb52938958f%3A0x451b9d4daaf1fb40!2s0150%20Oslo!5e0!3m2!1sno!2sno!4v1732099342380!5m2!1sno!2sno"
              // width="600"
              // height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="iframe"
            ></iframe>
          </div>
          {/* <div className="contactHeaderBox">
            <h1 className={contactHeader show}>
            Kontakt
          </h1>
            <div className={`contactIngress show`}>KONTAKTSKJEMA</div>
          </div> */}
          <form id="contactForm">
            <div className="name">
              <label className={"show"} htmlFor="name">
                Navn
              </label>
              <input
                className={"show"}
                type="text"
                name="name"
                placeholder="Fyll inn navn"
                required
              />
            </div>
            <div className="email">
              <label className={"show"} htmlFor="email">
                E-post
              </label>
              <input
                className={"show"}
                type="email"
                name="email"
                placeholder="Fyll inn e-post"
                required
              />
            </div>
            <div className="message">
              <label className={"show"} htmlFor="message">
                Melding
              </label>
              <textarea
                className={"show"}
                name="message"
                rows="10"
                placeholder="Skriv melding"
                required
              ></textarea>
            </div>
            <div className="submit">
              <input
                className={"submitButton show"}
                type="submit"
                value="SEND"
              />
            </div>
          </form>
        </div>
        <div className="iframeContainer-narrow">
          <iframe
            className="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30767.87699612734!2d10.686101816428504!3d59.88891751470016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416bb52938958f%3A0x451b9d4daaf1fb40!2s0150%20Oslo!5e0!3m2!1sno!2sno!4v1732099342380!5m2!1sno!2sno"
            // width="600"
            // height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="iframe"
          ></iframe>
        </div>
      </section>
    </div>
  )
}
