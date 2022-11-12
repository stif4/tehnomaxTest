import React from "react";
import { Route, Routes } from "react-router-dom";

import InputForm from "./component/inputForm";
import Layout from "./component/layout";
import Product from "./component/product";
import Wigjet from "./component/widget";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"/"} element={<Wigjet />} />
        <Route path={"/product/:id"} element={<Product />} />
        <Route path={"/input"} element={<InputForm />} />
      </Route>
    </Routes>
  );
};
export default App;
