import "./styles/contact.css"

export default function Contact({ engelsk }) {
  return (
    <>
      <div className="contactBox" id="contact">
        <div className="contactHeaderBox">
          {/* <h1 className={contactHeader show}>
            Kontakt
          </h1> */}
          <div className={`contactIngress show`}>KONTAKTSKJEMA</div>
        </div>
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
            <input className={"submitButton show"} type="submit" value="SEND" />
          </div>
        </form>
      </div>
    </>
  )
}
