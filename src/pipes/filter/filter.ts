import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value:any, filter: string, term: any) {
    // filter = filter ? filter.toLocaleLowerCase() : null;
    if (!filter) {
      return value;
    } else if (value) {
      return value.filter(term=> {
        for (let key in term) {
          if ((typeof term[key] === 'string' || term[key] instanceof String) &&
            (term[key].toLowerCase().indexOf(filter.toLowerCase()) !== -1)) {
            return true;
          }
        }
      });
    }}
}
