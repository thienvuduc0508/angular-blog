import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layouts/header/header.component";
import { NavbarComponent } from "./layouts/navbar/navbar.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { PostCardComponent } from "./layouts/post-card/post-card.component";
import { TranslateService } from '@ngx-translate/core';
import { GlobalContext } from './models/global-context';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, FooterComponent, PostCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-blog';
  public translate = inject(TranslateService)
  constructor() {
    this.translate.addLangs(['en-us', 'vi-vn']);
    this.translate.setDefaultLang('en-us');
    let lang = GlobalContext.getLang();
    this.translate.use(lang);
  }
}
