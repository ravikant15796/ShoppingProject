import { Component, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.services';
import {NgForm} from '@angular/forms'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') slForm :NgForm;
 private subscription : Subscription;
 editMode = false;
 editItemindex : number;
 editedItem :Ingredient;
constructor(private shoppingListService : ShoppingListService) { }
  ngOnInit() {
    this.subscription=this.shoppingListService.startedEditing.subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editItemindex=index;
        this.editedItem = this.shoppingListService.getIngredientToShoppingList(index);
        this.slForm.setValue({
         name : this.editedItem.name,
         amount:this.editedItem.amount
        });
      }
    );

  }
 onAdd(form:NgForm){
  const value = form.value;
  const newIngredient = new Ingredient(value.name, value.amount);
  if(this.editMode){
    this.shoppingListService.updateIngredient(this.editItemindex, newIngredient);
  }
  else{
    this.shoppingListService.addIngredient(newIngredient);
  }
  this.editMode=false;
  form.reset();
  }

}
