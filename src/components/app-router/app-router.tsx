import { Navigate, Route, Routes } from "react-router-dom";
import { MenuOption } from "../app/App";
import { CreateFruit } from "../create-fruit/cerate-fruit";
import { Home } from "../home/home";

type AppRouterProps = {
  menuOptions: MenuOption[];
};
export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Routes>
      <Route path={"/"} element={<Home></Home>}></Route>
      <Route path={menuOptions[0].path} element={<Home></Home>}></Route>
      <Route
        path={menuOptions[1].path}
        element={<CreateFruit></CreateFruit>}
      ></Route>
      <Route
        path={"*"}
        element={<Navigate to={"/home"} replace={true} />}
      ></Route>
    </Routes>
  );
}
