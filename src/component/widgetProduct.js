import React from "react";
import style from "./widgetProduct.module.scss";
import styleWidget from "./widget.module.scss";
import { Link } from "react-router-dom";

const WidgetProduct = ({ data, handleClik }) => {
  return (
    <div className={`${style.widget__product} ${style.product}`}>
      <div className={style.product__container}>
        <div className={style.product__row}>
          {data.map((i) => {
            return (
              <Link className={style.product__column} key={i.id} to={`/product/${i.id}`}>
                  <div className={`${style.product__item} ${style.item}`}>
                    <div className={style.item__row}>
                      <div className={`${style.item__img} ${styleWidget._ibg}`}>
                        <img src={i.image} alt="" />
                      </div>
                      <div className={style.item__body}>
                        <p className={style.item__name}>{i.title}</p>
                        <div className={style.item__price}>{i.price} $</div>
                      </div>
                    </div>
                  </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WidgetProduct;
