import React from "react";
import { Menu } from "../app-menu/app-menu";
import { AppRouter } from "../app-router/app-router";
import { Header } from "../header/header";
import "./App.css";

export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "New fruit", path: "/create" },
];

function App() {
  return (
    <>
      <Header>
        <Menu options={menuOptions}></Menu>
      </Header>
      <AppRouter menuOptions={menuOptions}></AppRouter>
    </>
  );
}

export default App;
