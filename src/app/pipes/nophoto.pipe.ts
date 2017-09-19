import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nophoto'
})
export class NophotoPipe implements PipeTransform {

  transform(value: any[]): string {
    let noimage = "assets/img/noimage.png";
    if (value.length>0){
      return value[1].url;
    }
    else {
        return noimage;
    }

  }

}
