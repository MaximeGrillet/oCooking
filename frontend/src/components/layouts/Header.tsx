import Navigation from "./Navigation.tsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h1>
          <Link to="/">o'Cooking</Link>
        </h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
