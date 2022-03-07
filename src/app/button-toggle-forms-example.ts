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
  fontStyleControl = new FormControl();
  selectedNumber: number = 0;
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
