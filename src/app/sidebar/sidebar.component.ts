import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  bool:boolean=false
  down:boolean=false
  item:boolean=false
  send:boolean=false
  pencilb:boolean=false
  com:boolean=true
  choice:boolean=false
  match:boolean=false
  qwerty:any
 
  constructor(private dataService:EmitterService,private dataService1:EmitterService,private dataService2:EmitterService,private route:Router,private dataService3:EmitterService) { }

  ngOnInit(){
    this.dataService1.getEyeto().subscribe((x: any) => {
      this.pencilb = x;
    }) 
  
  }
  newclass(){
    this.bool=true
    
    
  }
  delet(){
    this.bool=false
  }
  drop(){
    this.down=!this.down
  }
  choclate() {
    // this.dataService.setBooleanToTrue(true);
    this.dataService.setDown(true);
  }
 hide(){
  this.com=!this.com
 }

 choicein(){
 
 this.dataService2.setChoiceto(true);
  

 }
 matchin(){
  this.dataService3.setMatchto(true);
  
  
 }

 
  
  

}
