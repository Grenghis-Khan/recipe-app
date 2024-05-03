import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  // @Output() ingredientCreated = new EventEmitter<Ingredient>();
  @ViewChild('nameInputRef', { static: true })
  nameInput: ElementRef;
  @ViewChild('amountInputRef', { static: true })
  amountInput: ElementRef;
  //ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) {}

  // ngOnInit(): void {
  //   this.ingredients = this.shoppingListService.
  // }

  onAddIngredient() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    //this.ingredientCreated.emit(newIngredient);
    this.slService.onIngredientAdded(newIngredient);
  }
}
