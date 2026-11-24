// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2022-2026 Wydawnictwo Interaktywne Medutools Sp. z o.o.
//
// This file is part of kalkulatoropioidow.pl (Opioid Rotation Calculator, frontend).
// Licensed under the GNU Affero General Public License v3.0 or later.
// See the LICENSE file in the project root for the full license text.

import {Component, OnInit} from '@angular/core';
import {ResultsService} from '../../../shared/services/results/results.service';
import {ContentService} from '../../../shared/services/content/content.service';
import {OpioidService} from '../../../shared/services/opioid/opioid.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'kidney-failure',
  templateUrl: './kidney-failure.component.html'
})
export class KidneyFailureComponent implements OnInit {

  public kidneyCheckboxWasChecked: boolean;

  constructor(public contentService: ContentService,
              public opioidService: OpioidService,
              public resultsService: ResultsService) { }

  ngOnInit(): void {
    this.checkIfKidneyCheckboxWasChecked();
  }

  private checkIfKidneyCheckboxWasChecked(): void {
    this.kidneyCheckboxWasChecked = this.resultsService.results.kidneyCheckbox;
  }
}
