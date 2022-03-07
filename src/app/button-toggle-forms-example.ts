import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * @title Button-toggles with forms
 */
@Component({
  selector: 'button-toggle-forms-example',
  templateUrl: 'button-toggle-forms-example.html',
})
export class ButtonToggleFormsExample {
  firstNumber: number = 1;
  secondNumber: number = 1;
  listNumber: number[] = [1, 2, 3, 4, 5, 6];
}
