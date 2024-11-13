import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {ContentService} from '../../shared/services/content/content.service';
import {licenseNumberValidator} from './validators/license-number.validator';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit {

  public infoModalForm: FormGroup;

  public professions: string[] = ['lekarzem', 'pielęgniarką', 'farmaceutą'];
  public licenseNumber: string = '';

  public profession: string = 'lekarzem';
  public currentMask: string = '0 0 0 0 0 0 0';
  public currentPlaceholder: string = '_ _ _ _ _ _ _';
  public maskPatterns: any = {
    '0': { pattern: new RegExp('\\d') },
    'A': { pattern: new RegExp('[A-Za-z]') }
  };

  constructor(public contentService: ContentService,
              public modalRef: BsModalRef) {}

  ngOnInit(): void {
    this.buildForm();

    this.infoModalForm.get('profession')?.valueChanges.subscribe(() => {
      this.infoModalForm.get('licenseNumber')?.updateValueAndValidity();
    });
  }

  public buildForm(): void {
    this.infoModalForm = new FormGroup({
      profession: new FormControl('lekarzem', Validators.required),
      licenseNumber: new FormControl('', licenseNumberValidator())
    });
  }

  onProfessionChange(event: Event) {

    const profession = (event.target as HTMLSelectElement).value

    this.infoModalForm.get('licenseNumber')?.reset();
    this.licenseNumber = '';

    switch (profession) {
      case 'lekarzem':
        this.currentMask = '0 0 0 0 0 0 0';
        this.currentPlaceholder = '_ _ _ _ _ _ _';
        break;
      case 'pielęgniarką':
        this.currentMask = '0 0 0 0 0 0 0 A';
        this.currentPlaceholder = '_ _ _ _ _ _ _ _';
        break;
      case 'farmaceutą':
        this.currentMask = '0 0 0 0 0 0 0 0';
        this.currentPlaceholder = '_ _ _ _ _ _ _ _';
        break;
      default:
        this.profession = 'lekarzem';
        this.currentMask = '0 0 0 0 0 0 0';
        this.currentPlaceholder = '_ _ _ _ _ _ _';
    }
  }

  public onSubmit(): void {
    localStorage.setItem('modalWasOpen', 'true');
    this.modalRef.hide();
  }
}
