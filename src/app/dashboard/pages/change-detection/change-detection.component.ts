import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

type Property = {
  name: string;
  released: string;
};
@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
  styles: ``,
})
export class ChangeDetectionComponent {
  public frameworkProperty: Property = {
    name: 'Angular',
    released: '2016',
  };
  public frameworkPropertySignal = signal<Property>({
    name: 'Angular',
    released: '2016',
  });

  constructor() {
    setTimeout(() => {
      this.frameworkPropertySignal.update(value=> ({...value,name: 'React'}));
    }, 3000);
  }
}
