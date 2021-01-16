import Logo from "../images/Logo.svg";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" />
    </header>
  );
};

export default Header;
