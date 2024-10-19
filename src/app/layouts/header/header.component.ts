import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalContext } from '../../models/global-context';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLanguage: string = 'en-us';
  translate = inject(TranslateService)
  changeLang(lang: string) {
    this.translate.use(lang);
    this.currentLanguage = lang;
    return GlobalContext.setLang(lang);
  }

  constructor() {
    this.currentLanguage = GlobalContext.getLang();
  }
}
