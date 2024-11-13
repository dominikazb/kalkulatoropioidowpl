export function validatePharmacistLicenseNumber(licenseNumber: string): boolean {

  const numbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22']

  if (licenseNumber == null || licenseNumber.length !== 8 || !numbers.includes(licenseNumber.slice(0, 2))) {
    return false;
  }

  const weights = [3, 1, 3, 1, 3, 1, 3];
  const digits = licenseNumber.slice(0, 7).split('').map(Number);

  const weightedSum = digits.reduce((acc, digit, index) => {
    return acc + digit * weights[index];
  }, 0);

  const modulo = weightedSum % 10;

  const controlNumber = modulo === 0 ? modulo : (10 - modulo);

  return controlNumber === parseInt(licenseNumber[7], 10);
}
