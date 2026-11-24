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
  selector: 'form-buprenorphine',
  templateUrl: './form-buprenorphine.component.html'
})
export class FormBuprenorphineComponent {

  // @ts-ignore
  @Input() parentFormGroup: FormGroup;

  public titleText = 'Buprenorfina transdermalnie:';
  public buprenorphineDoses: number[] = [0, 17.5, 26.25, 35, 52.5, 70, 87.5, 105, 122.5, 140];
  public unit = 'μg/h';

  constructor(public formsService: FormsService) { }
}
