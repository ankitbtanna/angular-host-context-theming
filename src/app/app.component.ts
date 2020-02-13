import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[class.light-theme]': '(theme === \'light\')',
    '[class.dark-theme]': '(theme === \'dark\')'
  }
})
export class AppComponent {
  title = 'host-context-theming';
  theme = 'light';

  switchTheme(theme: string) {
    this.theme = theme;
  }
}
