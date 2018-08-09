import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 
  @ViewChild('nameAdded') nameInput : ElementRef ;
  @ViewChild('amountAdded') amountInput : ElementRef ;
  @Output() ingredientAdd = new EventEmitter<Ingredient >();
   
  constructor() { }

  ngOnInit() {
  }

  onAdd(){
  
  const ingName = this.nameInput.nativeElement.value;
  const ingAmount = this.amountInput.nativeElement.value;
  const newIngredient = new Ingredient(ingName , ingAmount);
  this.ingredientAdd.emit(newIngredient);
  console.log("Hii");

  }

}
