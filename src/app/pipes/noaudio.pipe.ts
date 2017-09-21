import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noaudio'
})
export class NoaudioPipe implements PipeTransform {

  transform(value: string): any {
    let noaudio = "";
    if (value == null){
      return noaudio;
    }
    else {
        return value;
    }
  }

}
