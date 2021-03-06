import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.services";
import { Subject } from "rxjs";
@Injectable()
 
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] =[
        new Recipe('A Test Recipe' , 
        'This simply a test' , 
        'https://imgcld.yatra.com/ytimages/image/upload/t_seo_Magnum_w_452_h_285_c_fill_g_auto_q_auto:good_f_jpg/General_North_Indian_food_best_places_to_eat5.jpg',
         [new Ingredient('Mango' , 1),
         new Ingredient('Meat' , 2),
         new Ingredient('Bread' , 3)]


    ),
        new Recipe('Another Test Recipe' ,
         'This simply a test' , 
         'http://workwithalex.com/wp-content/uploads/2017/07/6-2-burger-png-image.png',
        
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

      getRecipe(index :number){
        return this.recipes[index];
      }
      addRecipe(recipe:Recipe){
         this.recipes.push(recipe);
         this.recipeChanged.next(this.recipes.slice());
      }
      updateRecipe(index:number , newrecipe:Recipe){
      this.recipes[index] = newrecipe;
      this.recipeChanged.next(this.recipes.slice());
      }
      removeRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
      }
      setRecipe(recipe:Recipe[]){
        this.recipes = recipe;
        this.recipeChanged.next(this.recipes.slice());
      }

}