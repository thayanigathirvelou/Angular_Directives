import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { HighlightTextDirective } from './highlight-text.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directive';
  
  Counter = 'thaya';
  searchText = '';
}
