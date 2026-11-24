// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2022-2026 Wydawnictwo Interaktywne Medutools Sp. z o.o.
//
// This file is part of kalkulatoropioidow.pl (Opioid Rotation Calculator, frontend).
// Licensed under the GNU Affero General Public License v3.0 or later.
// See the LICENSE file in the project root for the full license text.

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-branding-footer',
  templateUrl: './branding-footer.component.html'
})
export class BrandingFooterComponent {
  @Input() showBrandingFooterText: boolean;
}
