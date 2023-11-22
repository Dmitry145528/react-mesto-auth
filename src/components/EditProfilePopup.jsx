import { useState, useEffect, useContext } from 'react'
import PopupWithForm from "./PopupWithForm"
import CurrentUserContext from '../contexts/CurrentUserContext'

function EditProfilePopup(props) {
  const [submitButtonText, setSubmitButtonText] = useState('Сохранить');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const currentUser = useContext(CurrentUserContext);

  // Обработчик изменения инпута обновляет стейт
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    if (currentUser.name && currentUser.about) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitButtonText('Сохранение...'); // Изменение текста кнопки при отправке формы

    props.onUpdateUser({
      name,
      about: description,
    })
      .finally(() => {
        setSubmitButtonText('Сохранить'); // Возвращение исходного текста кнопки после завершения запроса
      });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      button={submitButtonText}
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}>
      <fieldset className="popup__contact-info">
        <div className="popup__field">
          <input className="popup__input" id="name" placeholder="Имя и Фамилия" name="name" type="text" minLength="2" maxLength="40" required value={name} onChange={handleChangeName} />
          <span className="name-error popup__input-error"></span>
        </div>
        <div className="popup__field">
          <input className="popup__input" id="activity" placeholder="Деятельность" name="about" type="text" minLength="2" maxLength="200" required value={description} onChange={handleChangeDescription} />
          <span className="activity-error popup__input-error"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup