import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shirt',
  standalone: true
})
export class ShirtPipe implements PipeTransform {

  transform(size:number): string {
    if(size==36){
        return 'medium'+' size shirt'
    }
    else if(size==38)
      {
         return 'large'+' size shirt'
      }
      else{
        return 'extra large'+' size shirt'
      }
  }

}
