import { Injectable } from "@angular/core";
import {Http, Response} from '@angular/http'
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
@Injectable()
export class DataStorageService{
constructor(private http : Http, private recipeService: RecipeService){}
storeRecipe(){
     return this.http.put('https://shopping-app-8cf18.firebaseio.com/recipes.json', this.recipeService.getRecipes());
}

getRecipeStorage(){
    this.http.get('https://shopping-app-8cf18.firebaseio.com/recipes.json')
    .subscribe(
        (response : Response)=>{
          const recipe : Recipe[] = response.json();
          this.recipeService.setRecipe(recipe);
        }
    );
}
}