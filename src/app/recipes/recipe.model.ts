import { Ingredient } from "../shared/ingredients.model";

export class Recipe {
public name :string;
public description : string;
public imagepath: string;
public ingredients:Ingredient[];

constructor(name , dec  , imgpath , ingredient )
{
    this.name = name;
    this.description = dec;
    this.imagepath = imgpath;
    this.ingredients = ingredient;
}

}