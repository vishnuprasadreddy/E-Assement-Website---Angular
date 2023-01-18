import { Component } from '@angular/core';
import { EmitterService } from '../emitter.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent{
  send:boolean=false
  pencilb:boolean=false
  rect:boolean=false
  choice:boolean=false
  please:boolean=false
  don:boolean=false
  match:boolean=false
  card:boolean=false
  hidden:boolean=false
  bin:boolean=false
  constructor(private dataService:EmitterService,private dataService1:EmitterService,private dataService2:EmitterService,private dataService3:EmitterService){

  }
  ngOnInit() {
    this.dataService.getDown().subscribe((x: any) => {
      this.send = x;
    }) 
    this.dataService2.getChoiceto().subscribe((x: any) => {
      this.choice = x;
      
    }) 
   
    this.dataService3.getMatchto().subscribe((x: any) => {
      this.match = x;
    }) 
  

  }
  pencil(){
    this.rect=true;
    this.dataService1.setEyeto(true);

  }
  response(){
    this.please=!this.please
  }
  question(){
    this.please=!this.please
    
  }
  done(){
    this.don=!this.don
  
  }
  Match2(){
this.card=!this.card
  }
  Match3(){

this.card=!this.card
  }
  done2(){
    this.hidden=!this.hidden
  }
  trash(){
    this.bin=!this.bin

  }


}
