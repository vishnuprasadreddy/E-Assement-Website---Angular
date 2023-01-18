import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  constructor() { }

  public down = new BehaviorSubject<boolean>(false);

  setDown(changeToggle: boolean) {
    this.down.next(changeToggle);
  }

  getDown() {
    return this.down.asObservable();
  }

  
  public eyeto = new BehaviorSubject<boolean>(false);

  setEyeto(changeToggle: boolean) {
    this.eyeto.next(changeToggle);
  }

  getEyeto() {
    return this.eyeto.asObservable();
  }


  public choiceto = new BehaviorSubject<boolean>(false);

  setChoiceto(changeToggle: boolean) {
    this.choiceto.next(changeToggle);
  }

  getChoiceto() {
    return this.choiceto.asObservable();
  }


  public matchto = new BehaviorSubject<boolean>(false);

  setMatchto(changeToggle: boolean) {
    this.matchto.next(changeToggle);
  }

  getMatchto() {
    return this.matchto.asObservable();
  }

}
