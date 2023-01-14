import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(value: string): string {
    let result = '';
    const valueDate =  new Date(value);
    console.log(valueDate);
    
    const now = new Date().getTime();

    const delta = (now - valueDate.getTime()) / 1000;

    if (delta < 3600 * 24) {
      result = formatDate(Date.now(),'HH:mm', this.locale);
    } else if (delta < 3600 * 24 * 2) {
      result = 'Yesterday';
    } else {
      result =  Math.floor(delta / 86400) + ' Days ago';
    }

    return result;
  }

}
