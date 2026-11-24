// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2022-2026 Wydawnictwo Interaktywne Medutools Sp. z o.o.
//
// This file is part of kalkulatoropioidow.pl (Opioid Rotation Calculator, frontend).
// Licensed under the GNU Affero General Public License v3.0 or later.
// See the LICENSE file in the project root for the full license text.

import {FormControl, FormGroup} from '@angular/forms';
import {Results} from '../../model/results/results';
import {Injectable} from '@angular/core';
import {OpioidResults} from '../../model/results/opioid.results';

@Injectable()
export class FormsService {

  public formOpioidFields: any = {
    index: '.index',
    numberOfDoses: '.numberOfDoses',
    dose: '.dose',
    unit: '.unit'
  };

  public formFentanylFields: any = {
    fentanylDose: 'fentanylDose'
  };

  public formBuprenorfineFields: any = {
    buprenorphineDose: 'buprenorphineDose'
  };

  public formConversionToFields: any = {
    opioidToCovertTo: 'opioidToCovertTo',
    doseReduction: 'doseReduction'
  };

  public fillFormOpioid(name: string, opioidResults?: OpioidResults): FormGroup {
    if (opioidResults) {
      return this.fillForm(name, opioidResults.opioid.index, opioidResults.numberOfDoses, opioidResults.dose, opioidResults.unit);
    } else {
      return this.fillForm(name, 0, 0, 'dawka', 'mg');
    }
  }

  private fillForm(name: string, index: number, numberOfDoses: number, dose: any, unit: any): FormGroup {
    return new FormGroup({
      [name + this.formOpioidFields.index]: new FormControl(index),
      [name + this.formOpioidFields.numberOfDoses]: new FormControl(numberOfDoses),
      [name + this.formOpioidFields.dose]: new FormControl(dose),
      [name + this.formOpioidFields.unit]: new FormControl(unit)
    });
  }

  public fillFormFentanyl(results?: Results): FormGroup {
    return this.returnFormGroup(this.formFentanylFields.fentanylDose,
      results?.fentanyl.dose ? results.fentanyl.dose : 0);
  }

  public fillFormBuprenorphine(results?: Results): FormGroup {
      return this.returnFormGroup(this.formBuprenorfineFields.buprenorphineDose,
        results?.buprenorphine.dose ? results.buprenorphine.dose : 0);
    }

  private returnFormGroup(name: string, dose: number): FormGroup {
    return new FormGroup({[name]: new FormControl(dose)});
  }

  public fillFormConversionTo(results?: Results): FormGroup {
    return new FormGroup({
      [this.formConversionToFields.opioidToCovertTo]: new FormControl(
        results?.opioidToConvertToIndex ? results.opioidToConvertToIndex : 0
      ),
      [this.formConversionToFields.doseReduction]: new FormControl(
        results?.doseReduction ? results.doseReduction : 0
      )
    });
  }
}
