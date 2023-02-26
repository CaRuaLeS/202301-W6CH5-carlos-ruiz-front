import React from "react";
import { Menu } from "../app-menu/app-menu";
import { AppRouter } from "../app-router/app-router";

export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "New fruit", path: "/create" },
];

function App() {
  return (
    <>
      <h1>Fruits</h1>
      <Menu options={menuOptions}></Menu>
      <AppRouter menuOptions={menuOptions}></AppRouter>
    </>
  );
}

export default App;
