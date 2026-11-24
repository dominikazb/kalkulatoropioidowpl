// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2022-2026 Wydawnictwo Interaktywne Medutools Sp. z o.o.
//
// This file is part of kalkulatoropioidow.pl (Opioid Rotation Calculator, frontend).
// Licensed under the GNU Affero General Public License v3.0 or later.
// See the LICENSE file in the project root for the full license text.

import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormsService} from '../../../shared/services/form/forms.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-fentanyl',
  templateUrl: './form-fentanyl.component.html'
})
export class FormFentanylComponent {

  // @ts-ignore
  @Input() parentFormGroup: FormGroup;

  public titleText = 'Fentanyl transdermalnie:';
  public fentanylDoses: number[] = [0, 12, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300];
  public unit = 'μg/h';

  constructor(public formsService: FormsService) { }
}
