import { useMemo } from "react";
import { useFruits } from "../../hooks/use.fruits";
import { FruitsRepo } from "../../services/api.fruits.repo";
import { Card } from "../card/card";

import "./home.css";

export function Home() {
  const repo = useMemo(() => new FruitsRepo(), []);
  const { fruits } = useFruits(repo);

  return (
    <>
      <h1>List of fruits:</h1>
      <ul className="fruit-list">
        {fruits.fruits.map((item) => {
          return <Card key={item.id} fruit={item}></Card>;
        })}
      </ul>
      <p></p>
    </>
  );
}
