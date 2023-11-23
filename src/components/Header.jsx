import { Link } from 'react-router-dom';
import Logo from '../images/Logo.svg'

function Header(props) {
	return (
		<header className="header">
			<img src={Logo} alt="Логотип в виде надписи Место Россия" className="header__logo" />
			<Link className="header__link" to="/sign-up">{props.link}</Link>
		</header>
	);
}

export default Header;