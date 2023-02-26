import { useMemo } from "react";
import { useFruits } from "../../hooks/use.fruits";
import { FruitStructure } from "../../model/fruit";
import { FruitsRepo } from "../../services/api.fruits.repo";

type FruitProps = {
  fruit: FruitStructure;
};

export function Card({ fruit }: FruitProps) {
  const repo = useMemo(() => new FruitsRepo(), []);
  const { deleteFruit } = useFruits(repo);

  const handleDelete = () => {
    deleteFruit(fruit.id);
  };

  return (
    <>
      <li className="fruit-card">
        <div className="fruit-card__name">Name: {fruit.name}</div>
        <div className="fruit-card__color">Color: {fruit.color}</div>
        <div className="fruit-card__weight">Weight: {fruit.weight}</div>
        <button onClick={handleDelete}>🗑</button>
      </li>
    </>
  );
}
