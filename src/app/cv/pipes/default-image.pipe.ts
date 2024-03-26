import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONSTANTES } from 'src/app/config/constantes.config';



@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    // Si path vide ou ne contient que des espaces
    // return image par défaut
    // sinon on retourne le path
    return path.trim() ? path : APP_CONSTANTES.defaultImage;
  }

}
