import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-branding-footer',
  templateUrl: './branding-footer.component.html'
})
export class BrandingFooterComponent {
  @Input() showBrandingFooterText: boolean;
}
