import { Component, EventEmitter, Output, Injectable } from "@angular/core";
import { DataStorageService } from "../shared/data.storage";
import { Response } from "@angular/http";
 

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'

})

export class HeaderComponent{
   constructor(private dataStore:DataStorageService){}
    onSaveData(){
        this.dataStore.storeRecipe().subscribe(
            (response:Response)=>{
             }
        );
    }
    onFetchData(){
        
        this.dataStore.getRecipeStorage();
    }


}