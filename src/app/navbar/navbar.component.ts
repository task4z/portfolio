import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../services/storage.service';
import { UiStyleToggleService } from '../services/ui-style-toggle.service';

@Component({
  selector: 'aafl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public isOpen: boolean = false;
  public currentLang = 'en';
  public theme: string = '';
  private readonly THEME_KEY = 'THEME';
  @Output() public navigate: EventEmitter<string> = new EventEmitter();

  constructor(private uiStyleToggleService: UiStyleToggleService,
    private storage: StorageService,
    private translate: TranslateService) {
      this.setTheme();
  }

  public useLanguage(): void {
    this.currentLang = this.currentLang === 'en' ? 'pt' : 'en';
    this.translate.use(this.currentLang);
  }

  public toggleTheme(): void {
    this.uiStyleToggleService.toggle();
    this.setTheme();
  }

  public goTo(place: string): void {
    this.navigate.emit(place);
  }

  private setTheme(): void {
    this.theme = this.storage.get(this.THEME_KEY);
  }

  public open(){
    window.open('/assets/Public_CV_EN_Andre_Lourenco.pdf', '_blank');
  }
}
