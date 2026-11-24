// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2022-2026 Wydawnictwo Interaktywne Medutools Sp. z o.o.
//
// This file is part of kalkulatoropioidow.pl (Opioid Rotation Calculator, frontend).
// Licensed under the GNU Affero General Public License v3.0 or later.
// See the LICENSE file in the project root for the full license text.

import {Component, Input, OnInit} from '@angular/core';
import {Results} from '../../../shared/model/results/results';
import {ResultsService} from '../../../shared/services/results/results.service';
import {OpioidIndices} from '../../../shared/data/opioid/OpioidIndices';
import {ContentService} from '../../../shared/services/content/content.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'opioid-conversion-to',
  templateUrl: './opioid-conversion-to.component.html'
})
export class OpioidConversionToComponent implements OnInit {

  @Input() listOfProposedBuprenorphinePlasters: string[];
  public opioidIndices = OpioidIndices;
  public results: Results;

  constructor(public contentService: ContentService,
              private resultsService: ResultsService,) { }

  ngOnInit(): void {
    this.results = this.resultsService.results;
  }
}
