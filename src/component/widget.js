import React, { useEffect, useState } from "react";
import style from "./widget.module.scss";
import WidgetProduct from "./widgetProduct";
import WidgetSeartch from "./widgetSeartch";
import WidgetSidebar from "./widgetSidebar";
import axios from "axios";
import { quickSort } from "../services/quickSort";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wigjet = () => {
  const [goods, setGoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [dataSeartch, setdataSeartch] = useState([]);
  const [goodsfiltered, setGoodsfiltered] = useState([]);
  const [categoriesMatched, setCategoriesMatched] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  console.log(goods);

  const handleChange = (data) => {
    if (data.replace(/ /g,'').length) {
      const dataTrimed = data.trimEnd().trimStart();
      const dataSplited = dataTrimed.split(" ");
      setdataSeartch(dataSplited);
    }
  };

  const RegExpFilter = (selectedGoodKey, word) => {
    const reg = new RegExp("(^| )" + word.toLowerCase() + "( |$)", "g");
    if (reg.test(selectedGoodKey.toLowerCase())) {
      return true;
    }
  };

  const fillObject = (check, objMathc, obj, typeHeck) => {
    if (check) {
      if (!objMathc.id) {
        objMathc.id = obj.id;
        objMathc.title = obj.title;
        objMathc.category = obj.category;
        objMathc.image = obj.image;
        objMathc.price = obj.price;
        if (typeHeck === "title") {
          objMathc.mathTitle = 1;
          objMathc.mathCategory = 0;
        } else {
          objMathc.mathTitle = 0;
          objMathc.mathCategory = 1;
        }
      } else {
        typeHeck === "title"
          ? (objMathc.mathTitle += 1)
          : (objMathc.mathCategory += 1);
      }
    }
    return objMathc;
  };

  const match = (goodsfiltered1) => {
    const arryPush = [];
    const arryPop = [];
    for (const obj of goodsfiltered1) {
      let objMathc = {};
      for (const word of dataSeartch) {
        const checkTitle = RegExpFilter(obj.title, word);
        const checkCategory = RegExpFilter(obj.category, word);

        objMathc = { ...fillObject(checkTitle, objMathc, obj, "title") };
        objMathc = { ...fillObject(checkCategory, objMathc, obj, "category") };
      }

      if (Object.keys(objMathc).length) {
        if (objMathc.mathCategory !== 0 && objMathc.mathTitle !== 0) {
          arryPush.push(objMathc);
        } else {
          arryPop.push(objMathc);
        }
      }
    }
    return [...arryPop, ...arryPush];
  };

  const filterMathed = (arryMathed) => {
    const arrySorted = quickSort(
      arryMathed,
      0,
      arryMathed.length - 1,
      "mathTitle"
    );
    return arrySorted;
  };

  const categoriesMath = (arryFiltered) => {
    const categoriesMatced = categories.map((c) => {
      const value = arryFiltered.reduce((accumulator, currentValue) => {
        if (currentValue.category === c) {
          return (accumulator = accumulator + 1);
        }
        return accumulator;
      }, 0);
      return { name: c, value };
    });
    
    if(arryFiltered.length>0){
      setIsloading(true);
    }else{
      toast('В магазине нет данного асортимента');
    }
    return categoriesMatced;
  };

  const chekSertch = () => {
    if (dataSeartch.length) {
      return true;
    }
    return false;
  };

  const filterGoods = () => {
    if (chekSertch()) {
      const arryMathed = match(goods);
      const arryFiltered = filterMathed(arryMathed).reverse();
      const categoriesMatced = categoriesMath(arryFiltered);

      setGoodsfiltered(arryFiltered);
      setCategoriesMatched(categoriesMatced);
    }
  };

  useEffect(() => {
    const url = `https://fakestoreapi.com/products`;

    axios.get(url).then((res) => {
      setGoods(res.data);
    });

    axios.get(url + "/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  const handleClik = () => {};

  return (
    <section className={style.widget}>
      <div className={style.widget__container}>
        <WidgetSeartch onChange={handleChange} onTupp={filterGoods} />
        {isLoading && (
          <div className={style.widget__main}>
            <WidgetSidebar data={categoriesMatched} handleClik={handleClik} />
            <WidgetProduct data={goodsfiltered} />
          </div>
        )}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Wigjet;
