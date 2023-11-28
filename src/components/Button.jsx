import { Link as ScrollLink } from 'react-scroll';
import "./Button.css"

function Button({ to, id, text, theme = "light"}) {
  const themeClass = theme === "dark" ? "dark-theme" : "light-theme";
  
  return (
    <div id={id} className={`view-work ${themeClass}`}>
      {to && (
        <ScrollLink to={to} spy={true} smooth={true} offset={-80} duration={500}>
          <button>
            <span>{text} ➔</span>
          </button>
        </ScrollLink>
      )}
    </div>
  );
}

export default Button;