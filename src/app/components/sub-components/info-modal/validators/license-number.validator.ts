import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import {validateMedicalDoctorLicenseNumber} from './medical-doctor-license.validator';
import {validateNurseLicenseNumber} from './nurse-license.validator';
import {validatePharmacistLicenseNumber} from './pharmacist-license.validator';


export function licenseNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent) {
      return null;
    }

    const profession = control.parent.get('profession')?.value;
    const licenseNumber = control.parent.get('licenseNumber')?.value;

    let isValid;

    switch (profession) {
      case 'lekarzem':
        isValid = validateMedicalDoctorLicenseNumber(licenseNumber);
        break;
      case 'pielęgniarką':
        isValid = validateNurseLicenseNumber(licenseNumber);
        break;
      case 'farmaceutą':
        isValid = validatePharmacistLicenseNumber(licenseNumber);
        break;
      default:
        isValid = validateMedicalDoctorLicenseNumber(licenseNumber);
    }

    return isValid ? null : { invalidLicense: 'Invalid license number for selected profession' };
  };
}
