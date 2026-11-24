// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2022-2026 Wydawnictwo Interaktywne Medutools Sp. z o.o.
//
// This file is part of kalkulatoropioidow.pl (Opioid Rotation Calculator, frontend).
// Licensed under the GNU Affero General Public License v3.0 or later.
// See the LICENSE file in the project root for the full license text.

import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {OpioidService} from '../../../shared/services/opioid/opioid.service';
import {Opioid} from '../../../shared/model/opioid/opioid';
import {FormsService} from '../../../shared/services/form/forms.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-opioid',
  templateUrl: './form-opioid.component.html'
})
export class FormOpioidComponent implements OnInit {

  @Input() name: string;
  // @ts-ignore
  @Input() parentFormGroup: FormGroup;
  public opioids: Opioid[] = [];
  public numberOfDoses: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  public units: string[] = ['mg', 'μg'];

  constructor(public formsService: FormsService,
              private drugService: OpioidService) { }

  ngOnInit(): void {
    this.opioids = this.drugService.getOpioidsWithoutPlasters();
  }
}
