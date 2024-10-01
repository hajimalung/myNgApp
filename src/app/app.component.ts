import { Component, OnInit } from '@angular/core';
import { SUPPORTED_TRANSLATION_LOCALES, TransLationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private traslator:TransLationService){
    traslator.setLanguage(SUPPORTED_TRANSLATION_LOCALES.ENGLISH);
  }
  ngOnInit(): void {
  }
  title = 'my-app';
}
