
import videoBg from '../../assets/videos/videoBg.mp4'
import './welcome.scss';

function Welcome() {
  return (
    <section className="welcome" id="Welcome">
      <div className="welcome__overlay"></div>
      <video className="welcome__video" src={videoBg} autoPlay loop muted />
      <div className="welcome__content">
        <div className="welcome__title">Welcome!</div>
        <h5 className="welcome__subtitle">I am Ana Lourenço </h5>
        <p className="welcome__description">This is my CV & Portfolio Website</p>
      </div>
    </section>
  );
}

export default Welcome