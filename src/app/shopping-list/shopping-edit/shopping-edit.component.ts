import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @Output() ingredientCreated = new EventEmitter<Ingredient>();
  @ViewChild('nameInputRef', { static: true })
  nameInput: ElementRef;
  @ViewChild('amountInputRef', { static: true })
  amountInput: ElementRef;

  onAddIngredient() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientCreated.emit(newIngredient);
  }
}
