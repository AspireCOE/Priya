import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userTitle',
  standalone: true
})
export class UserTitlePipe implements PipeTransform {

  transform(name:string,gender: string): string {
    if (gender.toLowerCase() === 'male') {
      return 'Mr. ' + name;
    } else if (gender.toLowerCase() === 'female') {
      return 'Ms. ' + name;
    } else {
      return name;
    }
  }
  }


