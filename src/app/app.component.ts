import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  DepScreen = false;  // currently not visible
  EmpScreen = false;  // currently not visible
  active = 0
  
  onSelect(active){
    if(active == 1){
      this.DepScreen = true; // department screen visible
      this.EmpScreen = false;
    }else if(active == 2){
      this.DepScreen = false; 
      this.EmpScreen = true;  // employee screen visible
    }else{
      this.DepScreen = false; 
      this.EmpScreen = false; 
    }
   }
  }
