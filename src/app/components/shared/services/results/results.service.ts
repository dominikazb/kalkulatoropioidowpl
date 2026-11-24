// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2022-2026 Wydawnictwo Interaktywne Medutools Sp. z o.o.
//
// This file is part of kalkulatoropioidow.pl (Opioid Rotation Calculator, frontend).
// Licensed under the GNU Affero General Public License v3.0 or later.
// See the LICENSE file in the project root for the full license text.

import {Injectable} from '@angular/core';
import {Results} from '../../model/results/results';

@Injectable()
export class ResultsService {

  public results: Results;

  public getResults(): Results {
    return this.results;
  }

  public setResults(results: Results): void {
    this.results = results;
  }
}
