import { Pipe, PipeTransform } from "@angular/core";
import { TransLationService } from "../services/translation.service";

@Pipe({
  name:"translate"
})
export class Translator implements PipeTransform{

  constructor(private translator:TransLationService){
  }

  transform(value: any) {
    console.log("trying to trnaslate value");
    return this.translator.trnaslate(value);
  }

}
