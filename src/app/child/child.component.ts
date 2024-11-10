import { ChangeDetectionStrategy, Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush //comment this line and check console to know how many times child component has been rendered unnecessarily
})
export class ChildComponent {
  //@Input() child:number | undefined;  case 2
  
 
  someFunction(){
    console.log("executing child!!");
  }

}
