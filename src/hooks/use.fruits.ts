import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiFruitsRepo as FruitsRepo } from "../services/api.fruits.repo";
import { AppDispatch, RootState } from "../store/store";
import * as ac from "../reducer/fruits.actions.creator";
import { FruitStructure } from "../model/fruit";

export function useFruits(repo: FruitsRepo) {
  const fruits = useSelector((state: RootState) => state.fruit);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const readAllFruits = async () => {
      try {
        const data = await repo.readFruits();
        dispatch(ac.readCreator(data));
      } catch (error) {
        console.error("Error");
      }
    };

    readAllFruits();
  }, [dispatch, repo]);

  const readFruit = async (id: number) => {
    try {
      const data = await repo.readOneFruits(id);
      dispatch(ac.readOneCreator(data));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const createFruit = async (info: FruitStructure) => {
    try {
      const data = await repo.create(info);
      dispatch(ac.createCreator(data));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const updateFruit = async (info: FruitStructure) => {
    try {
      const data = await repo.update(info);
      dispatch(ac.updateCreator(data));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const deleteFruit = async (id: number) => {
    try {
      await repo.delete(id);
      dispatch(ac.deleteCreator(id));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    fruits,
    readFruit,
    createFruit,
    updateFruit,
    deleteFruit,
  };
}
