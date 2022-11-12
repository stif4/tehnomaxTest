import React from "react";
import style from "./widgetSidebar.module.scss";

const WidgetSidebar = ({ data}) => {

  return (
    <div className={`${style.widget__sidebar} ${style.sidebar}`}>

      <div className={style.sidebar__container}>
        <ul className={style.sidebar__categories}>
          {data.map((l) => {
            return (
              <li key={l.name} className={`${style.sidebar__category} ${style.category}`}>
                <div className={style.category__container}>
                  <div className={style.category__text}>{l.name}</div>
                  <div className={l.value>0? style.category__number : `${style.category__number}  ${style.category__number_hover}`}>{l.value}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      
    </div>
  );
};

export default WidgetSidebar;
