import "./contact.scss"
import {
    AiFillGithub,
    AiOutlineLinkedin,
    AiOutlineMail,
    AiOutlinePhone,
  } from "react-icons/ai";

function Contact() {
  return (
    <section className="contact" id="Contact"  >
    <div className="contact__title">
      <div className="contact__title-animation"> Contact me: </div>
    </div>
    <p className="contact__paragraph">
      <AiOutlineMail style={{ paddingRight: "5px" }} />
      <a className="contact__link" href="mailto:ana.l.r.lourenco@proton.me">
        ana.l.r.lourenco@proton.me
      </a>
    </p >
    <p className="contact__paragraph">
      <AiOutlinePhone style={{ paddingRight: "5px" }} />{" "}
      <a className="contact__link" href="tel:0031639112882">0639112882</a>
    </p >
    <p className="contact__paragraph">
      <a className="contact__link" href="https://www.linkedin.com/in/ana-lourenco-60210a262/">
        <AiOutlineLinkedin style={{ paddingRight: "10px" }} />
      </a>
      <a className="contact__link" href="https://github.com/AnaLourenco3">
        <AiFillGithub />
      </a>
    </p >
    <p className="contact__paragraph">Amsterdam, Netherlands</p>
  </section>
  )
}

export default Contact










