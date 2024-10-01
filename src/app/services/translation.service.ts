import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

export const SUPPORTED_TRANSLATION_LOCALES: { [key:string]:string } = {
  'ENGLISH':'ENGLISH',
  'JAPANESE' : 'JAPANESE'
}

@Injectable({
    providedIn:"root"
  })
export class TransLationService{
  current_language: any;
  file_toRequiere: any;
  localizedMessages: any;
  // trnaslations will be available only if isReady is set to true
  // this will be set to true only when trnaslations are loaded
  isReady! : Subject<boolean>;
  constructor(){
    this.isReady = new Subject();
    this.isReady.next(false);

    // dont set default language
    // let app decide the default language
    // this.setLanguage(SUPPORTED_TRANSLATION_LOCALES.ENGLISH);
  }

  setLanguage(locale:string){
    if(!SUPPORTED_TRANSLATION_LOCALES.hasOwnProperty(locale)){
      console.error(`locale {$locale} not supported please refere SUPPORTED_TRANSLATION_LOCALES`);
      return;
    }
    this.isReady.next(false);
    this.current_language = SUPPORTED_TRANSLATION_LOCALES[locale];
    this.file_toRequiere = this.current_language+"_TRANSLATIONS.json";
    this.loadTranslationMessages();
  }

  async loadTranslationMessages(){
    console.log("loading : "+this.file_toRequiere);
    const resp = await import("./translations-dictionary/"+this.file_toRequiere);
    console.log("loaded!");
    console.log(resp);
    this.localizedMessages = resp;
    this.isReady.next(true);
  }

  trnaslate(lang_key:string){
    return this.localizedMessages[lang_key];
  }

}
