import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChoiceserviceService {

  constructor() { }
  subject:Subject<boolean>=new Subject()
}
