import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApp";
import Navbar from "./navbar";
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

    if(category==="All"){
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
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Desease;
