import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div>
        <Link to="/">CryptoAbsolute</Link>
      </div>

      <nav>
        <Link to="/">Учебник</Link>
        <Link to="/">Моя статистика</Link>
        <Link to="/">Профиль</Link>
      </nav>
    </div>
  );
};

export default Header;
