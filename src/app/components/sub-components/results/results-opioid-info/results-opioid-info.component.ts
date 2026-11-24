// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2022-2026 Wydawnictwo Interaktywne Medutools Sp. z o.o.
//
// This file is part of kalkulatoropioidow.pl (Opioid Rotation Calculator, frontend).
// Licensed under the GNU Affero General Public License v3.0 or later.
// See the LICENSE file in the project root for the full license text.

import {Component, OnInit} from '@angular/core';
import {ResultsService} from '../../../shared/services/results/results.service';
import {Results} from '../../../shared/model/results/results';
import {OpioidIndices} from '../../../shared/data/opioid/OpioidIndices';
import {ContentService} from '../../../shared/services/content/content.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'results-opioid-info',
  templateUrl: './results-opioid-info.component.html'
})
export class ResultsOpioidInfoComponent implements OnInit{

  public opioidsToShow: number[] = [];
  public opioidIndices = OpioidIndices;

  constructor(public contentService: ContentService,
              private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.opioidsToShow = this.getListOfChosenOpioidsFromResults(this.resultsService.results);
  }

  private getListOfChosenOpioidsFromResults(results: Results): number[] {
    const opioidsToShow: number[] = [];

    opioidsToShow.push(results.firstOpioid.opioid.index);
    opioidsToShow.push(results.secondOpioid.opioid.index);
    opioidsToShow.push(results.thirdOpioid.opioid.index);
    opioidsToShow.push(results.opioidToConvertTo.index);
    if (results.fentanyl.dose > 0) {
      opioidsToShow.push(results.fentanyl.opioid.index);
    }
    if (results.buprenorphine.dose > 0) {
      opioidsToShow.push(results.buprenorphine.opioid.index);
    }

    const opioidsFiltered =
      opioidsToShow
        .filter((value, index) => opioidsToShow.indexOf(value) === index)
        .filter(value => value !== 0 && value !== this.opioidIndices.MorphinePills.valueOf());
    return opioidsFiltered;
  }
}
