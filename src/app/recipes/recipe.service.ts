import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model' 

import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A big burger',
      'This is a BIG burger',
      'https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg',
      [new Ingredient('buns', 2), new Ingredient('patty', 1)]
    ),
    new Recipe(
      'Hot Dog',
      "It's a hot dog!",
      'https://upload.wikimedia.org/wikipedia/commons/f/fb/Hotdog_-_Evan_Swigart.jpg',
      [new Ingredient('wiener', 1), new Ingredient('bun', 1)]
    ),
  ];
constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
}

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}