import * as _ from 'underscore';

export function validateNurseLicenseNumber(licenseNumber: string): boolean {

  const numbers = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
    '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36',
    '37', '38', '39', '40', '41', '42', '43', '44', '45']

  if (licenseNumber == null || licenseNumber.length !== 8) {
    return false;
  }

  const firstTwoCharacters = licenseNumber.charAt(0) + licenseNumber.charAt(1);

  return _.contains(numbers, firstTwoCharacters) &&
    (licenseNumber.charAt(7).toLowerCase() === 'p' || licenseNumber.charAt(7).toLowerCase() === 'a');
}
