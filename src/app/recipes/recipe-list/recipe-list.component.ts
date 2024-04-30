import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is test desc',
      'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is test desc 2',
      'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg'
    ),
  ];

  onRecipeClicked(recipeClicked: Recipe) {
    this.recipeWasSelected.emit(recipeClicked);
  }
}
