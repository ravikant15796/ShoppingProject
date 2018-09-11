import { Ingredient } from "../shared/ingredients.model";
import { Subject } from "rxjs";

export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();
   private  ingredients: Ingredient[] =[
    new Ingredient('Apple',5),
    new Ingredient('Banna',25),
  ];
    getIngredient(){
       
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient)
    {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients : Ingredient[]){
      // for (let i of ingredients ){
      //   this.addIngredient(i);
      // }
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
}