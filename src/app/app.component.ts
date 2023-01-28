import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '08-communicationEntreComposants';

  onomatopoeiaList: string[] = [];
  
  onReceiveNewOnomatopia(event: string):void{
    console.log(event)
    this.onomatopoeiaList.push(event)
    console.log(this.onomatopoeiaList)

  }

}
