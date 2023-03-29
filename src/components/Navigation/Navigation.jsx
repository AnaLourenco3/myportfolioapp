import React from "react";
import "./navigation.scss";

const Navigation = ({ activeSectionIndex, handleClick }) => {

  const getBulletColor = (sectionIndex) => {
    switch (sectionIndex) {
      case "Welcome":
        return "#daa69f";
      case "About":
        return "#0F363D";
      case "Education":
        return "#daa69f";
      case "Portfolio":
        return "#0F363D";
      case "Contact":
        return "#daa69f";
      default:
        return "#0F363D";
    }
  };

  const getTextColor = (sectionIndex) => {
    switch (sectionIndex) {
      case "Welcome":
        return "#0F363D";
      case "About":
        return "#daa69f";
      case "Education":
        return "#0F363D";
      case "Portfolio":
        return "#daa69f";
      case "Contact":
        return "#0F363D";
      default:
        return "#0F363D";
    }
  };

  const handleClickLink = (item) => {
    const targetElement = document.getElementById(item);
    targetElement.scrollIntoView({ behavior: "smooth" });
    handleClick(item);
  };

  return (
    <div className="navigation">
      <ul className="navigation__list">
        {["Welcome", "About", "Education", "Portfolio", "Contact"].map((item) => {
          const isActive = item === activeSectionIndex;
          return (
            <li key={item} className="navigation__item">
              {isActive ? (
                <a
                  className="navigation__link-bullet-active"
                  style={{
                    backgroundColor: getBulletColor(activeSectionIndex),
                    borderColor: getBulletColor(activeSectionIndex),
                    color: getTextColor(activeSectionIndex),
                  }}
                  onClick={() => handleClickLink(item)}
                >
                  {item}
                </a>
              ) : (
                <a
                  className="navigation__link-bullet"
                  style={{ borderColor: getBulletColor(activeSectionIndex),  color: getBulletColor(activeSectionIndex) }}
                  onClick={() => handleClickLink(item)}
                >
                  {item}
                  <svg viewBox="0 0 213 90" className="navigation__circle">
                    <path
                      d="M73.759 6.262c93.533 2.853 139.742 11.684 138.628 26.494-1.67 22.215-20.379 50.837-65.534 55.946C101.697 93.812 2.823 74.27 1.069 49.2c-1.17-16.713 24.28-32.757 76.347-48.131"
                      stroke={getBulletColor(activeSectionIndex)}
                      fill="none"
                      fillRule="evenodd"
                      strokeWidth="1"
                    />
                  </svg>
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
