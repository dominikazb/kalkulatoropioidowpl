// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2022-2026 Wydawnictwo Interaktywne Medutools Sp. z o.o.
//
// This file is part of kalkulatoropioidow.pl (Opioid Rotation Calculator, frontend).
// Licensed under the GNU Affero General Public License v3.0 or later.
// See the LICENSE file in the project root for the full license text.

export function validateMedicalDoctorLicenseNumber(licenseNumber: string): boolean {

  if (licenseNumber == null || licenseNumber.length !== 7 || licenseNumber.charAt(0) === '0') {
    return false;
  }

  const checkSum =
    ((Number.parseInt(licenseNumber.charAt(1), 10) +
      Number.parseInt(licenseNumber.charAt(2), 10) * 2 +
      Number.parseInt(licenseNumber.charAt(3), 10) * 3 +
      Number.parseInt(licenseNumber.charAt(4), 10) * 4 +
      Number.parseInt(licenseNumber.charAt(5), 10) * 5 +
      Number.parseInt(licenseNumber.charAt(6), 10) * 6) % 11);

  const controlNumber = Number.parseInt(licenseNumber.charAt(0), 10);

  return checkSum === controlNumber;
}
