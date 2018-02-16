export class List {
  public id: number;
  public name: string;
  public user: number;
  public recipes: string[];

  constructor(

    id: number,
    name: string,
    user: number,
    recipes: string[] = null,

  ) {

    this.id = id;
    this.name = name;
    this.user = user;
    this.recipes = recipes;

  }
}