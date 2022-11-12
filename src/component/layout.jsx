import React from "react";
import { Link, Outlet } from "react-router-dom";
import style from "../app.module.scss";

const Layout = () => {
  return (
    <div className={style.wrapper}>
      <main className={style.page}>
        <header className={style.header}>
            <Link to='/' >Widget</Link>
            <Link to='/input' >InputForm</Link>
        </header>
        <div className={style.content}>
          <div className={style.container}>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
