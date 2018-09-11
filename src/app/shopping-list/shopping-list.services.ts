import { Ingredient } from "../shared/ingredients.model";


export class ShoppingListService{
   private  ingredients: Ingredient[] =[
    new Ingredient('Apple',5),
    new Ingredient('Banna',25),
  ];
    getIngredient(){
       
        return this.ingredients.slice();
    }
    addIngredient(Data : Ingredient)
    {
      this.ingredients.push(Data);
    }
    addIngredients(ingredients : Ingredient[]){
      for (let i of ingredients ){
        this.addIngredient(i);
      }
    }
}