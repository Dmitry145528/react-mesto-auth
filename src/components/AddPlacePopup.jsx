import PopupWithForm from "./PopupWithForm";
import { useState, useEffect } from 'react';

function AddPlacePopup(props) {
  const [submitButtonText, setSubmitButtonText] = useState('Добавить');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  // Обработчик изменения инпута обновляет стейт
  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  useEffect(() => {
    // Сброс полей при закрытии модального окна
    if (!props.isOpen) {
      setTitle('');
      setUrl('');
    }
  }, [props.isOpen]);

  function handleChangeUrl(e) {
    setUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitButtonText('Добавление...'); // Изменение текста кнопки при отправке формы

    props.onAddPlace({
      name: title,
      link: url
    })
      .finally(() => {
        setSubmitButtonText('Добавить'); // Возвращение исходного текста кнопки после завершения запроса
      });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      button={submitButtonText}
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}>
      <fieldset className="popup__contact-info">
        <div className="popup__field">
          <input className="popup__input" value={title} onChange={handleChangeTitle} placeholder='Название' id="title" name="name" type="text" minLength="2" maxLength="30" required />
          <span className="title-error popup__input-error"></span>
        </div>
        <div className="popup__field">
          <input className="popup__input" value={url} onChange={handleChangeUrl} placeholder='Ссылка на картинку' id="img-url" name="link" type="url" required />
          <span className="img-url-error popup__input-error"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;