import { Component } from '@angular/core';
import { ChoiceserviceService } from './choiceservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-E';
  flag!:any
  constructor(private shared:ChoiceserviceService){
    this.shared.subject.asObservable().subscribe((qwe)=>{
      this.flag=qwe
     })
    
  }
}
