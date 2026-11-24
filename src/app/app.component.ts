// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2022-2026 Wydawnictwo Interaktywne Medutools Sp. z o.o.
//
// This file is part of kalkulatoropioidow.pl (Opioid Rotation Calculator, frontend).
// Licensed under the GNU Affero General Public License v3.0 or later.
// See the LICENSE file in the project root for the full license text.

import {Component, OnInit} from '@angular/core';
import {InfoModalComponent} from './components/sub-components/info-modal/info-modal.component';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  modalConfig: ModalOptions = {
    class: 'modal-xl',
    ignoreBackdropClick: true,
    keyboard: false
  };
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit(): void {
    setTimeout(() => this.openModal(), 500);
  }

  public openModal(): void {
    if (localStorage.getItem('hideModal') !== 'true') {
      this.modalRef = this.modalService.show(InfoModalComponent, this.modalConfig);
    }
  }
}
