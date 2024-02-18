import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'C';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export class ControlFlowComponent {
  public showContent = signal<boolean>(false);
  public grade = signal<Grade>('A');
  public listFrameworks = signal<string[]>(['Angular','Vue','React','Svelt','Nestjs']);
  public listFrameworks2 = signal<string[]>([]);
  public shadow: boolean = true;

  toggleButton():void{
  this.showContent.update(signal => !signal);

  }

  toggleButtonGrade(value: Grade){
    this.grade.set(value);
  }
}
