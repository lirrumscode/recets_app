import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search",
})
export class SearchPipe implements PipeTransform {
  transform(arr: any[], text: string): any[] {
    if (!arr) {
      return [];
    }
    if (!text) {
      return arr;
    }
    text = text.toLowerCase();
    return arr.filter((it) => {
      return it.title.toLowerCase().includes(text);
    });
  }
}
