import React, { useState } from 'react';
import CSSModules from 'react-css-modules';
import style from './tariffs.module.scss';

function Tariffs(props) {
  const colors = props.color;
  const {name, price, speed, id} = props;

  function getId() {
    props.setCount(id);
  }
  const sel = props.isBoolean ? "selected" : ""
  return (
    <div onClick={getId} className={[style.tariff, style[sel]].join(' ')} styleName={colors}>
      <div styleName='tariff_name'><p>{name}</p></div>
      <div styleName='tariff_price'><p>руб <span>{price}</span> /мес</p></div>
      <div styleName='tariff_speed'><p>до {speed} Мбит/сек</p></div>
      <div styleName='tariff_limit'><p>Объём включённого трафика не ограничен</p></div>
    </div>
  )
}
export default CSSModules(Tariffs, style)