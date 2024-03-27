import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root',
})
export class LoggerService {

  /**
   * Permet de logger le message envoyé en paramètre
   * @param message
   */
  logger(message: any): void{
    console.log('Logging : ');
    console.log(message);
  }
}
