import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'username' })
export class UsernamePipe implements PipeTransform {
  transform(property: string) {
    if (property.lastIndexOf('_'))
      return property.substring(0, property.lastIndexOf('_'));
    else return property;
  }
}
