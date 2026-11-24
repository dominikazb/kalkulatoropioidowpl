// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2022-2026 Wydawnictwo Interaktywne Medutools Sp. z o.o.
//
// This file is part of kalkulatoropioidow.pl (Opioid Rotation Calculator, frontend).
// Licensed under the GNU Affero General Public License v3.0 or later.
// See the LICENSE file in the project root for the full license text.

export class TotalDailyDoseService {

  public calculateOpioidTotalDailyDose(index: number, numberOfDoses: number, dose: number, unit: string): number {
    let opioidDailyDose = 0;
    if (unit === 'mg') {
      opioidDailyDose = this.calculateTotalOpioidDailyDoseFromMgToMg(numberOfDoses, dose);
    } else if (unit === 'μg') {
      opioidDailyDose = this.calculateTotalOpioidDailyDoseFromUgToMg(numberOfDoses, dose);
    }
    return opioidDailyDose;
  }

  public calculateOpioidPlasterTotalDailyDose(opioidDosePerHour: number): number {
    return opioidDosePerHour * 24 * 0.001; // * 24 hrs and convert from μg to mg
  }

  private calculateTotalOpioidDailyDoseFromMgToMg(numberOfDoses: number, doseInMg: number): number {
    return numberOfDoses * doseInMg;
  }

  private calculateTotalOpioidDailyDoseFromUgToMg(numberOfDoses: number, doseInUg: number): number {
    return numberOfDoses * doseInUg * 0.001;
  }
}
