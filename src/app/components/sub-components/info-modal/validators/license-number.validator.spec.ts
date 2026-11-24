import { FormControl, FormGroup } from '@angular/forms';
import { licenseNumberValidator } from './license-number.validator';

describe('licenseNumberValidator', () => {
  let form: FormGroup;

  beforeEach(() => {
    form = new FormGroup({
      profession: new FormControl(''),
      licenseNumber: new FormControl('', licenseNumberValidator())
    });
  });

  const validMedicalDoctorLicenseNumbers = ['2648483', '2595450', '1194175', '3069005']; // Replace with valid examples
  const invalidMedicalDoctorLicenseNumbers = ['1234567', '11', '', '0000000', '000000', '3697192'];

  const validNurseLicenseNumbers = ['4240479P', '4183093P', '1681178P', '1913504P', '1050353P', '2920810P']; // Replace with valid examples
  const invalidNurseLicenseNumbers = ['1611284Z', '1611284G', '1611284C', '1611284D', '1611284E', '1611284F'];

  const validPharmacistLicenseNumbers = ['09009059', '09009943', '09008557', '14592867', '12884742', '19853215']; // Replace with valid examples
  const invalidPharmacistLicenseNumbers = ['09009052', '23009052', '0900855'];

  validMedicalDoctorLicenseNumbers.forEach((licenseNumber) => {
    it(`should return null for valid medical doctor license number: ${licenseNumber}`, () => {
      form.get('profession')?.setValue('lekarzem');
      form.get('licenseNumber')?.setValue(licenseNumber);
      form.get('licenseNumber')?.updateValueAndValidity();
      const errors = form.get('licenseNumber')?.errors;
      expect(errors).toBeNull();
    });
  });

  invalidMedicalDoctorLicenseNumbers.forEach((licenseNumber) => {
    it(`should return invalidLicense error for invalid medical doctor license number: ${licenseNumber}`, () => {
      form.get('profession')?.setValue('lekarzem');
      form.get('licenseNumber')?.setValue(licenseNumber);
      form.get('licenseNumber')?.updateValueAndValidity();
      const errors = form.get('licenseNumber')?.errors;
      expect(errors).toEqual({ invalidLicense: 'Invalid license number for selected profession' });
    });
  });

  validNurseLicenseNumbers.forEach((licenseNumber) => {
    it(`should return null for valid nurse license number: ${licenseNumber}`, () => {
      form.get('profession')?.setValue('pielęgniarką');
      form.get('licenseNumber')?.setValue(licenseNumber);
      form.get('licenseNumber')?.updateValueAndValidity();
      const errors = form.get('licenseNumber')?.errors;
      expect(errors).toBeNull();
    });
  });

  invalidNurseLicenseNumbers.forEach((licenseNumber) => {
    it(`should return invalidLicense error for invalid nurse license number: ${licenseNumber}`, () => {
      form.get('profession')?.setValue('pielęgniarką');
      form.get('licenseNumber')?.setValue(licenseNumber);
      form.get('licenseNumber')?.updateValueAndValidity();
      const errors = form.get('licenseNumber')?.errors;
      expect(errors).toEqual({ invalidLicense: 'Invalid license number for selected profession' });
    });
  });

  validPharmacistLicenseNumbers.forEach((licenseNumber) => {
    it(`should return null for valid pharmacist license number: ${licenseNumber}`, () => {
      form.get('profession')?.setValue('farmaceutą');
      form.get('licenseNumber')?.setValue(licenseNumber);
      form.get('licenseNumber')?.updateValueAndValidity();
      const errors = form.get('licenseNumber')?.errors;
      expect(errors).toBeNull();
    });
  });

  invalidPharmacistLicenseNumbers.forEach((licenseNumber) => {
    it(`should return invalidLicense error for invalid pharmacist license number: ${licenseNumber}`, () => {
      form.get('profession')?.setValue('farmaceutą');
      form.get('licenseNumber')?.setValue(licenseNumber);
      form.get('licenseNumber')?.updateValueAndValidity();
      const errors = form.get('licenseNumber')?.errors;
      expect(errors).toEqual({ invalidLicense: 'Invalid license number for selected profession' });
    });
  });

  it('should return invalidLicense error for an unknown profession', () => {
    form.get('profession')?.setValue('unknownProfession');
    form.get('licenseNumber')?.setValue('1234567');
    form.get('licenseNumber')?.updateValueAndValidity();
    const errors = form.get('licenseNumber')?.errors;
    expect(errors).toEqual({ invalidLicense: 'Invalid license number for selected profession' });
  });
});
