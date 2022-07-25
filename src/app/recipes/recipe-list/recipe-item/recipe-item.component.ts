import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes/recipes.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipesServices: RecipesService) { }

  ngOnInit(): void {
  }

  onSelectRecipe() {
    this.recipesServices.recipeSelected.emit(this.recipe);
  }
}
