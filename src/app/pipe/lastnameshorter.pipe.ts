import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastnameshorter'
})
export class LastnameshorterPipe implements PipeTransform {


  transform(value: string, ...args: unknown[]): string {
    let name = value
    if (name.includes(' ')) {
      let firstName = value.split(' ')[0]
      let lastName = value.split(' ')[1][0]
      let shortName = '.'+firstName +' '+lastName ;
      return shortName;
    }else{
      return name 
    }


  }

}
