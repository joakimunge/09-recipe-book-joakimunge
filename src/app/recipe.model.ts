export class Recipe {
  public id: number;
  public image: string;
  public title: string;
  public ingredients: string[];
  public source: object;
  public servings: number;
  public totalTime: string;
  public rating: number;


  constructor(

    id: number,
    image: string,
    title: string,
    ingredients: string[] = null,
    source: object = null,
    servings: number = null,
    totalTime: string = null,
    rating: number = null

  ) {

    this.id = id;
    this.image = image;
    this.title = title;
    this.ingredients = ingredients;
    this.source = source;
    this.servings = servings;
    this.totalTime = totalTime;
    this.rating = rating;

  }
}