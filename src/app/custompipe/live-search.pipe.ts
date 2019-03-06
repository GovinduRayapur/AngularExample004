import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'liveSearch'
})
export class LiveSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args == null){
      return value
    }

    return value.filter(function(v){
      console.log("I am in filter")
      console.log(v)
      return v.username.toLowerCase().includes(args.toLowerCase())
    })
  }

}
