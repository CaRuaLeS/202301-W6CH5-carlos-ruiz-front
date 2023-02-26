import { FruitStructure } from "../model/fruit";

export class ApiFruitsRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/fruits";
  }
  async readFruits(): Promise<FruitStructure[]> {
    const response = await fetch(this.url);
    if (!response.ok)
      throw new Error(
        "Error HTTP " + response.status + ". " + response.statusText
      );
    const data = await response.json();
    return data;
  }

  async readOneFruits(id: number): Promise<FruitStructure[]> {
    const response = await fetch(this.url + `/${id}`);
    if (!response.ok)
      throw new Error(
        "Error HTTP " + response.status + ". " + response.statusText
      );
    const data = await response.json();
    return data;
  }

  async update(info: FruitStructure): Promise<FruitStructure> {
    const url = this.url + `/${info.id}`;
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(info),
      headers: { "Content-type": "application/json" },
    });
    if (!response.ok)
      throw new Error(
        "Error HTTP " + response.status + ". " + response.statusText
      );
    const data = await response.json();
    return data;
  }

  async create(info: FruitStructure): Promise<FruitStructure> {
    const url = this.url + `/${info.id}`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(info),
      headers: { "Content-type": "application/json" },
    });
    if (!response.ok)
      throw new Error(
        "Error HTTP " + response.status + ". " + response.statusText
      );
    const data = await response.json();
    return data;
  }

  async delete(id: number): Promise<void> {
    const url = this.url + `/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok)
      throw new Error(
        "Error HTTP " + response.status + ". " + response.statusText
      );
    // const data = await response.json();
    // return data;
  }
}
