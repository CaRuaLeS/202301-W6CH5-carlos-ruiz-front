import { SyntheticEvent, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useFruits } from "../../hooks/use.fruits";
import { Fruit, FruitStructure } from "../../model/fruit";
import { FruitsRepo } from "../../services/api.fruits.repo";
import { AppDispatch } from "../../store/store";
import * as ac from "../../reducer/fruits.actions.creator";

export function CreateFruit() {
  const repo = useMemo(() => new FruitsRepo(), []);
  const { fruits, createFruit } = useFruits(repo);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = event.target as HTMLFormElement;
    const formInfo = document.querySelector("form") as HTMLFormElement;
    const inputs = formData.querySelectorAll("input");
    const newData = new Fruit(
      Number(inputs[0].value),
      inputs[1].value,
      inputs[2].value,
      Number(inputs[3].value)
    );
    createFruit(newData);
    console.log("Created: " + newData);
    formInfo.reset();
  };

  return (
    <>
      <h1>Create a New Fruit</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" name="id" placeholder="Set the id" required />
        <input type="text" name="name" placeholder="Fruit name" required />
        <input type="text" name="color" placeholder="Fruit color" required />
        <input
          type="number"
          name="weight"
          placeholder="Fruit weight"
          required
        />
        <button type="submit">Create Fruit</button>
      </form>
    </>
  );
}
