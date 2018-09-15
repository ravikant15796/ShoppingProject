import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id:number;
editMode = false;
recipeForm:FormGroup;
constructor(private route:ActivatedRoute , private recipeService : RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
    (params:Params)=>{
      this.id = +params['id'];
      this.editMode = params['id']!=null
      this.formInit();
    }

    );
  }

  private formInit(){
    let recipeName ='';
    let recipeImagepath =''
    let recipeDescription = ''
    let recipeIngredient =new FormArray([]);
    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagepath = recipe.imagepath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ing of recipe.ingredients){
          recipeIngredient.push(
            new FormGroup({
              'name': new FormControl(ing.name),
              'amount': new FormControl(ing.amount)
            })
          )
        }
    }

    }
    this.recipeForm=new FormGroup({
      'name': new FormControl(recipeName),
      'imagepath': new FormControl(recipeImagepath),
      'description':  new FormControl(recipeDescription),
      'ingredients' : recipeIngredient
    });
  }
  onSubmit(){
    
     console.log(this.recipeForm);
  }
  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
          
        ])
      })
    );
  }

}
