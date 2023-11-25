import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Logo from '../images/Logo.svg'

function Header(props) {

	const location = useLocation();
	const [currentPath, setCurrentPath] = useState(location.pathname);
	const history = useNavigate();

	useEffect(() => {
		setCurrentPath(location.pathname);
	}, [location.pathname]);

	const onSignOut = () => {
		localStorage.removeItem('token');
		history('/sign-in');
	}

	const getLinkText = () => {
		if (currentPath === "/sign-up") {
			return "Вход";
		} else if (currentPath === "/sign-in") {
			return "Регистрация";
		}
		// По умолчанию, возвращаем "Ошибка" для всех остальных случаев
		return console.log("Ошибка текста ссылки");
	};

	const getLinkTo = () => {
		if (currentPath === "/sign-up") {
			return "/sign-in";
		} else if (currentPath === "/sign-in") {
			return "/sign-up";
		}
		// По умолчанию, возвращаем "/sign-in" для всех остальных случаев
		return "/sign-in";
	};

	return (
		<header className="header">
			<img src={Logo} alt="Логотип в виде надписи Место Россия" className="header__logo" />
			{currentPath === "/" ? (
				<div className="header__container">
					<p className="header__info">{props.email}</p>
					<button className="header__button" onClick={onSignOut}>
						Выйти
					</button>
				</div>
			) : (
				<Link className="header__link" to={getLinkTo()}>
					{getLinkText()}
				</Link>
			)}
		</header>
	);
}

export default Header;