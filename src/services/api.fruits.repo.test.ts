import { FruitStructure } from "../model/fruit";
import { ApiFruitsRepo } from "./api.fruits.repo";

describe("Given a class to build api methods", () => {
  let repo: ApiFruitsRepo;
  beforeEach(() => {
    repo = new ApiFruitsRepo();
  });
  describe("When the readFruits method is called", () => {
    test("Then if it is ok, it should return an array", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue([]),
      });
      const result = await repo.readFruits();
      expect(result).toEqual([]);
    });
    test("Then if it is not ok, it should return an error", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn(),
      });
      await expect(repo.readFruits()).rejects.toThrowError();
    });
  });
  describe("When the readOneFruits method is called", () => {
    test("Then if it is ok, it should return an object", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ id: 2 }),
      });
      const result = await repo.readOneFruits(1);
      expect(result).toEqual({ id: 2 });
    });
    test("Then if it is not ok, it should return an error", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn(),
      });
      await expect(repo.readOneFruits(1)).rejects.toThrowError();
    });
  });
  describe("When the update method is called", () => {
    test("Then if it is ok, it should return the object with the content added", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ id: 2 }),
      });
      const result = await repo.update({ id: 2 } as unknown as FruitStructure);
      expect(result).toEqual({ id: 2 });
    });
    test("Then if it is not ok, it should return an error", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn(),
      });
      await expect(
        repo.update({ id: 1 } as unknown as FruitStructure)
      ).rejects.toThrowError();
    });
  });
  describe("When the create method is called", () => {
    test("Then if it is ok, it should add an object to the current file server", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ id: 1, test: "test" }),
      });
      const result = await repo.create({
        id: 2,
        test: "test-2",
      } as unknown as FruitStructure);
      expect(result).toEqual({ id: 1, test: "test" });
    });
    test("Then if it is not ok, it should return an error", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn(),
      });
      await expect(
        repo.create({ id: 1 } as unknown as FruitStructure)
      ).rejects.toThrowError();
    });
  });
  describe("When the delete method is called", () => {
    test("Then if it is ok, it should delete the selected element", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ id: 1, test: "test" }),
      });
      const result = await repo.delete(1);
      expect(result).toBe(undefined);
    });
    test("Then if it is not ok, it should return an error", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn(),
      });
      await expect(repo.delete(1)).rejects.toThrowError();
    });
  });
});
