import React from "react";
import style from "./widgetSeartch.module.scss";

const WidgetSeartch = ({ onChange, onTupp }) => {
  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  return (
    <div className={`${style.widget__search} ${style.search}`}>
      <div className={style.search__container}>
        <input
          className={style.search__input}
          onChange={handleChange}
          type="text"
        />
        <div className={style.search__button} onClick={onTupp}>
          <img className={style.search__icon} src="/white.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WidgetSeartch;
