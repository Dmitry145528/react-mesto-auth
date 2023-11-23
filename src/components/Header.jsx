import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Logo from '../images/Logo.svg'

function Header() {

	const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

	const getLinkText = () => {
		if (currentPath === "/sign-up") {
			return "Вход";
		} else if (currentPath === "/sign-in") {
			return "Регистрация";
		} else if (currentPath === "/") {
			return "Выход";
		}
		// По умолчанию, возвращаем "Ошибка" для всех остальных случаев
		return console.log("Ошибка");
	};

	const getLinkTo = () => {
		if (currentPath === "/sign-up") {
			return "/sign-in";
		} else if (currentPath === "/sign-in") {
			return "/sign-up";
		} else if (currentPath === "/") {
			return "/sign-in";
		}
		// По умолчанию, возвращаем "/sign-in" для всех остальных случаев
		return "/sign-in";
	};

	return (
		<header className="header">
			<img src={Logo} alt="Логотип в виде надписи Место Россия" className="header__logo" />
			<Link className="header__link" to={getLinkTo()}>
        {getLinkText()}
      </Link>
		</header>
	);
}

export default Header;