import './about.scss';
import Ana from "../../assets/images/ana.png";
import circleBg from "../../assets/images/imgBg.jpg";

function About() {
  return (
    <section className="about"id="About">
    <div className="about__content ">
      <div className="about__title"><span className="about__title">+</span> About me</div>

      <p className="about__subtitle">
        I'm Ana, a junior FullStack developer with a strong passion for
        FrontEnd development, driven to create captivating and intuitive
        user experiences through sleek and efficient design and coding.
      </p>

      <p className="about__text">
        During the Covid lockdowns, I discovered my talent and passion for
        programming and decided to pursue a career as a developer. Today, I
        am excited to use my technical skills and creativity in a unique and
        creative way.{" "}
      </p>
      <p className="about__text">
        {" "}
        What sets me apart as a developer is my diverse background. With a
        master's degree in dentistry and over a decade of experience as a
        dentist, researcher, and teacher, I bring a unique combination of
        technical skills, communication, attention to detail, and
        problem-solving abilities.{" "}
      </p>

      <p className="about__text">
        I'm now looking for a challenging and inspiring workplace where I
        can continue to grow and make valuable contributions.
      </p>
      <p className="about__subtitle">
        Thanks for visiting my portfolio page, I look forward to connecting
        with you!
      </p>
    </div>
    <div className="person">
      <div class="person__container">
        <img src={circleBg} className="person__circle" alt="Background" />
        <img src={Ana} className="person__img" alt="Ana Lourenço" />
      </div>
    </div>
  </section>
  )
}

export default About