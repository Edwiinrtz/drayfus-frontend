import { Breed } from "./breed";

export interface CatImage {
    breeds: Breed[]|undefined;
    categories: any[]|null;
    id: string;
    url: string;
    width: number;
    height: number;
}