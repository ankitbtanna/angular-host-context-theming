# HostContextTheming

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
# HostContextTheming
This project will help us understand how we can apply theming to our entire application using just a single class name. Hence reducing complexity.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Host Context in Action

  `````
:host-context(.light-theme) & {
    background-color: $light-page-background-color;
    color: $light-page-text-color;
  }

  :host-context(.dark-theme) & {
    background-color: $dark-page-background-color;
    color: $dark-page-text-color;
  }
`````

On your top level component, you add this:
`````
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
`````

You would like to use variables a lot. I use it like this:
`````
// Page level variables
$light-page-background-color: #ffffff;
$light-page-text-color: #2E2E2E;
$light-page-textarea-background-color: #f5f5f5;
$light-page-textarea-text-color: #2E2E2E;
$light-page-textarea-border-color: #b8b8b8;
$light-page-textarea-charcount-background-color: #dddddd;
$light-page-search-border-color: #b8b8b8;
$light-page-search-text-color: #2E2E2E;
$light-page-search-background-color: #f5f5f5;

$dark-page-background-color: #2E2E2E;
$dark-page-text-color: #ffffff;
$dark-page-textarea-background-color: #2E2E2E;
$dark-page-textarea-text-color: #f5f5f5;
$dark-page-textarea-border-color: #E1E1E1;
$dark-page-textarea-charcount-background-color: #222222;
$dark-page-search-border-color: #E1E1E1;
$dark-page-search-text-color: #f5f5f5;
$dark-page-search-background-color: #2E2E2E;
$dark-page-search-button-background-color: #222222;
$dark-page-search-button-text-color: #f5f5f5;
`````

This can be used for light/dark them and client specific theming.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
