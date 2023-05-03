import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  @Output() ingredientWasCreated = new EventEmitter<Ingredient>();

  createIngredient() {
 
      const ingName = this.nameInputRef.nativeElement.value;
    const ingNumber = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingNumber);
 this.ingredientWasCreated.emit(newIngredient);
    console.log('works');
  }
}
