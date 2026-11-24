// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2022-2026 Wydawnictwo Interaktywne Medutools Sp. z o.o.
//
// This file is part of kalkulatoropioidow.pl (Opioid Rotation Calculator, frontend).
// Licensed under the GNU Affero General Public License v3.0 or later.
// See the LICENSE file in the project root for the full license text.

import {Opioid} from '../../model/opioid/opioid';
import {OPIOIDS} from '../../data/opioid/opioids';
import {Results} from '../../model/results/results';
import {OpioidResults} from '../../model/results/opioid.results';

export class OpioidService {

  private buprenorphineTransdermalIndex = 2;
  private fentanylTransdermalIndex = 5;

  public getOpioid(index: number): Opioid {
    let opioid: Opioid = new Opioid(0, '', 0, 0, 0, 0);
    OPIOIDS.forEach(opioidFromList => {
      if (opioidFromList.index === index) {
        opioid = opioidFromList;
      }
    });
    return opioid;
  }

  public getBuprenorphine(): Opioid {
    return this.getOpioid(this.buprenorphineTransdermalIndex);
  }

  public getFentanyl(): Opioid {
    return this.getOpioid(this.fentanylTransdermalIndex);
  }

  public getOpioids(): Opioid[] {
    return OPIOIDS.sort((a, b) => a.index - b.index);
  }

  public getOpioidsWithoutPlasters(): Opioid[] {
    return OPIOIDS.filter(item => item.index !== this.buprenorphineTransdermalIndex &&
                          item.index !== this.fentanylTransdermalIndex);
  }

  public oneOfOpioidsWasChosen(results: Results): boolean {
    return results.firstOpioid && this.opioidWasChosen(results.firstOpioid) ||
      results.secondOpioid && this.opioidWasChosen(results.secondOpioid) ||
      results.thirdOpioid && this.opioidWasChosen(results.thirdOpioid) ||
      results.fentanyl && this.plasterWasChosen(results.fentanyl) ||
      results.buprenorphine && this.plasterWasChosen(results.buprenorphine);
  }

  public opioidWasChosen(opioidResults: OpioidResults): boolean {
    return opioidResults.opioid.index !== 0 && opioidResults.numberOfDoses !== 0 && opioidResults.dose !== 0;
  }

  public plasterWasChosen(opioidResults: OpioidResults): boolean {
    return !Number.isNaN(opioidResults.dose) && (opioidResults.dose !== 0);
  }

  public opioidToConvertToWasChosen(results: Results): boolean {
    if (results !== undefined) {
      return !Number.isNaN(results.opioidToConvertToIndex) && results.opioidToConvertToIndex !== 0;
    } else {
      return false;
    }
  }
}
