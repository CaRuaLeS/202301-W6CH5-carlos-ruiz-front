export type FruitStructure = {
  id: number;
  name: string;
  color: string;
  weight: number;
};

export class Fruit implements FruitStructure {
  constructor(
    public id: number,
    public name: string,
    public color: string,
    public weight: number
  ) {}
}
