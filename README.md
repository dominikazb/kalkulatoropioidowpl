## About this repository (scope)

This is the public source repository for the **web frontend** of
**kalkulatoropioidow.pl**, an opioid dose conversion calculator. The entire
conversion logic and the equianalgesic matrix reside in this frontend
application. The backend performs **no computation**: it is a separate,
manufacturer-operated service that only persists already-computed records to a
database, and is therefore **not part of this release**.

This repository is the published **corresponding source** of the application
served at https://kalkulatoropioidow.pl. It is kept in sync with the deployed
version; the live site links back here via a "Source" link.

## License

Copyright (C) 2022-2026 **Wydawnictwo Interaktywne Medutools Sp. z o.o.** (Poland)

Licensed under the **GNU Affero General Public License v3.0 or later
(AGPL-3.0-or-later)**. See the [LICENSE](LICENSE) file for the full text.

The AGPL permits reuse, modification and redistribution provided that:

- the original copyright and licence notices are retained (attribution);
- any modified version that is distributed is also released under the AGPL; and
- **if you run a modified version to provide a service over a network, you must
  offer its complete corresponding source code to the users of that service**
  (AGPL §13). In this application that obligation is met by the "Source" link in
  the interface, which points to this repository.

SPDX-License-Identifier: `AGPL-3.0-or-later`

## Attribution

Any reuse must preserve the copyright notice above and credit the original
source: *kalkulatoropioidow.pl, © Wydawnictwo Interaktywne Medutools Sp. z o.o.*,
https://github.com/dominikazb/kalkulatoropioidowpl

## How to cite

If you use this software in academic work, please cite both the software and the
accompanying article (see [CITATION.cff](CITATION.cff)):

> Biesiada A, Żurek-Biesiada D, Mastalerz-Migas A. kalkulatoropioidow.pl —
> Opioid Rotation Calculator [software]. Zenodo; 2026. doi:10.5281/zenodo.XXXXXXX

> Biesiada A, Żurek-Biesiada D, Mastalerz-Migas A. Translating opioid rotation
> rules into code: ... BMC Med Inform Decis Mak. 2026. doi:10.1186/XXXXX






## Kalkulator Opioidów

Visit online: http://kalkulatoropioidow.pl/

<p>The purpose of this application is to support medical doctors in calculating correct doses of opioid drugs for their patients.</p>
<p>Opioids are drugs commonly used in pain treatment. Patients often need to be switched from one opioid to another due to various reasons (e.g. burdensome, or harmful side effects, getting saturated with the drug etc.). Calculation of proper opioid doses poses many problems among medical specialists.</p>
<p>This online tool is supposed to help medical doctors calculate correct doses of opioid drugs when switching patient from one drug to another.</p>


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
