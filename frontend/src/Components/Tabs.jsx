import React from "react";
import { TABS } from "../Redux/action/type.js";
import { useDispatch } from "react-redux";
import { toggleTab } from "../Redux/action/index.js";

const Tabs = ({ currentTab }) => {
  const dispatch = useDispatch();
  return TABS.map((tab) => (
    <button
      key={tab}
      className={tab === currentTab ? "button selected" : "button"}
      onClick={() => dispatch(toggleTab(tab))}
    >
      {tab}
    </button>
  ));
};

export default Tabs;
