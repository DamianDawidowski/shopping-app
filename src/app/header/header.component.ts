import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
 
   @Output() featureSelected = new EventEmitter<string>();
  
  onSelect(message:string) {
    this.featureSelected.emit(message);
    console.log(message);
  }
  collapsed = true;
}