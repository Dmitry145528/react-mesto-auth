import { Link } from "react-router-dom";

function Register() {
  return(
    <div className="auth">
      <h2 className="popup__header auth__header">Регистрация</h2>
      <form className="auth__form">
        <fieldset className="popup__contact-info auth__contact-info">
          <div className="auth__field">
            <input className="popup__input auth__input" id="email" placeholder="Email" name="email" type="email" required />
            <span className="email-error popup__input-error"></span>
          </div>
          <div className="auth__field">
            <input className="popup__input auth__input" id="password" placeholder="Пароль" name="password" type="password" required />
            <span className="password-error popup__input-error"></span>
          </div>
        </fieldset>
        <button className="popup__button auth__button" aria-label="Кнопка с надписью зарегистрироваться" type="submit">Зарегистрироваться</button>
      </form>
      <p className="auth__caption">Уже зарегистрированы? <Link className="auth__caption-link" to='/sign-in'>Войти</Link></p>
    </div>
  );
}

export default Register