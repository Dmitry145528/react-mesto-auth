import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import * as Auth from "../utils/Auth"

function Register(props) {

  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.password && formValue.email) {
      const { password, email } = formValue;
      Auth.register(password, email)
      .then((res) => {
        if (res.error) {
          props.handleLoginStatus(false); // Неудачный вход
          props.isOpen();
        } else {
          props.handleLoginStatus(true); // Успешный вход
          props.isOpen();
          navigate("/sign-in", { replace: true });
        }
      })
      .catch((err) => {
        // Обработка ошибок, если они не были обработаны внутри .then()
        console.log("Catch block:", err); // Выводим ошибку в консоль
        props.handleLoginStatus(false); // Неудачный вход
        props.isOpen();
      });
  }
}

  return (
    <div className="auth">
      <h2 className="popup__header auth__header">Регистрация</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <fieldset className="popup__contact-info auth__contact-info">
          <div className="auth__field">
            <input className="popup__input auth__input" value={formValue.email} onChange={handleChange} id="email" placeholder="Email" name="email" type="email" required />
            <span className="email-error popup__input-error"></span>
          </div>
          <div className="auth__field">
            <input className="popup__input auth__input" value={formValue.password} onChange={handleChange} id="password" placeholder="Пароль" name="password" type="password" required />
            <span className="password-error popup__input-error"></span>
          </div>
        </fieldset>
        <button className="popup__button auth__button" aria-label="Кнопка с надписью зарегистрироваться" >Зарегистрироваться</button>
      </form>
      <p className="auth__caption">Уже зарегистрированы?<Link className="auth__caption-link" to='/sign-in'> Войти</Link></p>
    </div>
  );
}

export default Register