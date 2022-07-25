import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Super recipe', 'Best recipe ever', 'https://static.750g.com/images/600-600/494469476ee6869a2df25efc01f9b865/francesinhas.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20)
      ]),
    new Recipe('Average recipe', 'Clearly cursed recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Chicken-chow-mein-7aeec1d.png',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('French fries', 20)
      ]),
    new Recipe('Clearly low food', 'You won\'t get lower ', 'https://img-9gag-fun.9cache.com/photo/aXggRe2_460s.jpg',
      [
        new Ingredient('Noodles', 50),
        new Ingredient('Chocolate', 3)
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
