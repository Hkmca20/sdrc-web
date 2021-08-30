import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import Navbar from "./navProduct";
import MenuCard from "./menuCard";

const categoryList = [
  ...new Set(
    Menu.map((item) => {
      return item.category;
    })
  ), "All"
];
console.log(categoryList);
const Desease = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList
    // , setMenuList
  ] = useState(categoryList);

  const filterItem = (category) => {

    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((item) => {
      return item.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <div className="navbar">
        <input
          type="text"
          className="rounded-pill w-30  w-lg-75 me-3 p-2 form-control-text"
          placeholder="search your test"
          onChange={(event) => filterItem(event.target.value)}
        />
      </div>
      {/* <h3>Common category:&nbsp;&nbsp;</h3> */}
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Desease;
