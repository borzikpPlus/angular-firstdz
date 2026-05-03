import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Экстремальное глажение';
  description = 'Это когда люди берут утюг и гладильную доску и идут гладить бельё в самые странные места: на горы, под воду, в лес. Звучит странно, но люди реально этим занимаются.';
}
