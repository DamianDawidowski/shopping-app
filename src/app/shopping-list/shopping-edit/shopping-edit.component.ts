import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListComponent } from '../shopping-list.component';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) {}

  createIngredient() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingNumber = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingNumber);
    this.slService.addIngredient(newIngredient);
  }
}
