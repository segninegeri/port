import React from "react";
import style from "./style.module.scss";
function index({href,children}) {
  return (
    <div>
      <button class={style.fancy} href={href}>
        <span class={style.topKey}></span>
              <span class={style.text}>{ children}</span>
        <span class={style.bottomkey1}></span>
        <span class={style.bottomkey2}></span>
      </button>
    </div>
  );
}

export default index;
