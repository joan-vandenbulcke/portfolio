import { useState } from 'react';
import './styles.scss';

const Button = () => {

  const [buttonState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState(buttonState => !buttonState);
  }

  let toggleClass = buttonState ? ' tablist-item--active' : '';

  return (
    <button
      className={`tablist-item${toggleClass}`}
      onClick={handleClick}
    >EVAS - Planet Care
    </button>
  )
}

export default Button;
