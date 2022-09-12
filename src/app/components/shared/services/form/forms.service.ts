import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
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

  public fillFormOpioid(name: string, opioidResults?: OpioidResults): UntypedFormGroup {
    if (opioidResults) {
      return this.fillForm(name, opioidResults.opioid.index, opioidResults.numberOfDoses, opioidResults.dose, opioidResults.unit);
    } else {
      return this.fillForm(name, 0, 0, 'dawka', 'mg');
    }
  }

  private fillForm(name: string, index: number, numberOfDoses: number, dose: any, unit: any): UntypedFormGroup {
    return new UntypedFormGroup({
      [name + this.formOpioidFields.index]: new UntypedFormControl(index),
      [name + this.formOpioidFields.numberOfDoses]: new UntypedFormControl(numberOfDoses),
      [name + this.formOpioidFields.dose]: new UntypedFormControl(dose),
      [name + this.formOpioidFields.unit]: new UntypedFormControl(unit)
    });
  }

  public fillFormFentanyl(results?: Results): UntypedFormGroup {
    return this.returnFormGroup(this.formFentanylFields.fentanylDose,
      results?.fentanyl.dose ? results.fentanyl.dose : 0);
  }

  public fillFormBuprenorphine(results?: Results): UntypedFormGroup {
      return this.returnFormGroup(this.formBuprenorfineFields.buprenorphineDose,
        results?.buprenorphine.dose ? results.buprenorphine.dose : 0);
    }

  private returnFormGroup(name: string, dose: number): UntypedFormGroup {
    return new UntypedFormGroup({[name]: new UntypedFormControl(dose)});
  }

  public fillFormConversionTo(results?: Results): UntypedFormGroup {
    return new UntypedFormGroup({
      [this.formConversionToFields.opioidToCovertTo]: new UntypedFormControl(
        results?.opioidToConvertToIndex ? results.opioidToConvertToIndex : 0
      ),
      [this.formConversionToFields.doseReduction]: new UntypedFormControl(
        results?.doseReduction ? results.doseReduction : 0
      )
    });
  }
}
