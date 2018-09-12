import { Ingredient } from "../shared/ingredients.model";
import { Subject } from "rxjs";

export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  

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
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
    getIngredientToShoppingList(index:number){
      return this.ingredients[index];
    }
    updateIngredient(index:number , newIngredient:Ingredient){
       this.ingredients[index] = newIngredient;
       this.ingredientsChanged.next(this.ingredients.slice());
    }
    
}