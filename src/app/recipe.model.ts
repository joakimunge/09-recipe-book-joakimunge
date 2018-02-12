export class Recipe {
  public id: number;
  public image: string;
  public title: string;

  constructor(
    id: number,
    image: string,
    title: string,
  ) {
    this.id = id;
    this.image = image;
    this.title = title;
  }
}