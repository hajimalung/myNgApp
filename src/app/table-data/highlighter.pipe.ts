import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, search: string): string {
    if (!search) {
      return value;
    }

    // Create a regex to match the search term
    const regex = new RegExp(`(${search})`, 'gi');
    // Replace the matched text with highlighted HTML
    return value.replace(regex, `<b>$1</b>`);
  }
}
