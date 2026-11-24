// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2022-2026 Wydawnictwo Interaktywne Medutools Sp. z o.o.
//
// This file is part of kalkulatoropioidow.pl (Opioid Rotation Calculator, frontend).
// Licensed under the GNU Affero General Public License v3.0 or later.
// See the LICENSE file in the project root for the full license text.

import {Component, OnInit} from '@angular/core';
import {ResultsService} from '../../../shared/services/results/results.service';
import {OpioidIndices} from '../../../shared/data/opioid/OpioidIndices';
import {ContentService} from '../../../shared/services/content/content.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'results-glpharma-info',
  templateUrl: './results-glpharma-info.component.html'
})
export class ResultsGlpharmaInfoComponent implements OnInit {

  public opioidToConvertToIndex: number;
  public opioidIndices = OpioidIndices;

  constructor(public contentService: ContentService,
              private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.opioidToConvertToIndex = this.resultsService.results.opioidToConvertToIndex;
  }

  public oneOfGlPharmaOpioidsWasChosen(): boolean {
    return this.opioidToConvertToIndex === this.opioidIndices.BuprenorphineTransdermal.valueOf() ||
      this.opioidToConvertToIndex === this.opioidIndices.FentanylTransdermal.valueOf() ||
      this.opioidToConvertToIndex === this.opioidIndices.Oxycodone.valueOf();
  }
}
