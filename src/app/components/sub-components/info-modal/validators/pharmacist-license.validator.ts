// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2022-2026 Wydawnictwo Interaktywne Medutools Sp. z o.o.
//
// This file is part of kalkulatoropioidow.pl (Opioid Rotation Calculator, frontend).
// Licensed under the GNU Affero General Public License v3.0 or later.
// See the LICENSE file in the project root for the full license text.

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
