import { useState } from 'react';
import About from './pages/Section2/About';
import Contact from './pages/Section5/Contact';
import Welcome from './pages/Section1/Welcome';
import './styles.scss';
import Navigation from './components/Navigation/Navigation';

export default function App() {
  const [activeSectionIndex, setActiveSectionIndex] = useState("Welcome");

  const handleSectionClick = (sectionIndex) => {
    setActiveSectionIndex(sectionIndex);
  };

  return (
    <div>
      <Navigation
        activeSectionIndex={activeSectionIndex}
        handleClick={handleSectionClick}
      />
      <Welcome id="Welcome" />
      <About id="About" />
      <Contact id="Contact" />
    </div>
  );
}