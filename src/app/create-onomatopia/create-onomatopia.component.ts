import { Component, EventEmitter, Output } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent {

newOnomatopia: string = '';

@Output()
sendOnomatopiaParent : EventEmitter<string> = new EventEmitter();
createOnomatopia(): void{

  console.log('envoi')
  this.sendOnomatopiaParent.emit(this.newOnomatopia)


}

}
