import React from "react";
import { useState } from "react";
import style from "./inputForm.module.scss";

const InputForm = () => {
  const [phone, setPhone] = useState(null);
  const [isValid, setIsValid] = useState(true);

  const hendleCange = ({ target }) => {
    let reg = undefined;
    if (target.name === "phone1") {
      reg = /^(([(]\d{3}[)]|\d{3})( |)\d{3}( |-|)\d{2}( |-|)\d{2})*[ ]{0,}$/gm;
    } else {
      reg =
        /^((\+7|8|7)( |)([(]\d{3}[)]|\d{3})( |)\d{3}( |-|)\d{2}( |-|)\d{2})*[ ]{0,}$/gm;
    }

    let isValidReg = reg.test(target.value);

    let corectNumber = target.value.replace(/[^+\d]/g, "");

    if (isValidReg) {
      if (target.name === "phone2") {
        const str = corectNumber.slice(-10);
        corectNumber = "+7" + str;
      } else {
        corectNumber = "+7" + corectNumber;
      }
      setPhone(corectNumber);
    }

    setIsValid(isValidReg);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!phone) {
      console.log("Заполните форму!");
    } else {
      console.log({ phone });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.form__label} htmlFor="phone">
          Укажите ваш номер:
        </label>
        <div className={style.form__container}>
          {/* <div className={style.form__prefiks}>
            <p>+7</p>
          </div>
          <input
            onChange={hendleCange}
            className={style.form__input}
            type="tel"
            maxLength="18"
            placeholder="(950) 056-14-56"
            size="11"
            name="phone1"
          /> */}
          <input
            onChange={hendleCange}
            className={style.form__input}
            type="tel"
            maxLength="18"
            placeholder="+7 (950) 056-14-56"
            size="11"
            name="phone2"
          />
        </div>
        <div className={isValid ? style.form__error : style.form__error_active}>
          Формат номера указан не верно!
        </div>
        <input
          type="submit"
          className={style.form__button}
          disabled={!isValid}
        />
      </form>

      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.form__label} htmlFor="phone">
          Укажите ваш номер:
        </label>
        <div className={style.form__container}>
          <div className={style.form__prefiks}>
            <p>+7</p>
          </div>
          <input
            onChange={hendleCange}
            className={style.form__input}
            type="tel"
            maxLength="18"
            placeholder="(950) 056-14-56"
            size="11"
            name="phone1"
          />
        </div>
        <div className={isValid ? style.form__error : style.form__error_active}>
          Формат номера указан не верно!
        </div>
        <input
          type="submit"
          className={style.form__button}
          disabled={!isValid}
        />
      </form>

    </>
  );
};

export default InputForm;
