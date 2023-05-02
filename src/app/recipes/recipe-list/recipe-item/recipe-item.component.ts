import { Component, Input } from '@angular/core';
 
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  // @Input() recipeName: string;
  // @Input() recipeDescription: string;
  // @Input() recipeImagePath: string;
  @Input() recipe: Recipe;
}
