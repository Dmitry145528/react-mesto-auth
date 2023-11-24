import True from '../images/True-reg.svg'
import False from '../images/False-reg.svg'

function InfoToolTip (props) {
  return (
    <div className={'popup popup_opened'}>
      <div className="popup__container infoTooltip__container">
        <button className="popup__close" type="button" aria-label="Кнопка в форме крестика" onClick={props.onClose}></button>
        <img src={props.isLoggedIn ? True : False} />
        <h2 className="popup__header infoTooltip__title">{props.isLoggedIn ? `Вы успешно зарегистрировались!` : `Что-то пошло не так!
Попробуйте ещё раз.`}</h2>
      </div>
    </div>
  );
}

export default InfoToolTip