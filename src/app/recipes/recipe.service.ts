import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.services";
@Injectable()
 
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] =[
        new Recipe('A Test Recipe' , 
        'This simply a test' , 
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
         [new Ingredient('Mango' , 1),
         new Ingredient('Meat' , 2),
         new Ingredient('Bread' , 3)]


    ),
        new Recipe('Another Test Recipe' ,
         'This simply a test' , 
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        
         [new Ingredient('StrawBerry' , 1),
         new Ingredient('Orange' , 2),
         new Ingredient('Bread' , 3)]

        )
      ];

      constructor(private slService : ShoppingListService){

      }
   
     getRecipes(){
      
       return this.recipes.slice();
      }

      onAddtoShopping(ingredients :Ingredient[]){
          
        this.slService.addIngredients(ingredients);
      }

}