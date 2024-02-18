import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `


  <section [ngClass]="['w-full h-[600px] ', cssClass]">
    hello world
  </section>
  `,
})
export class HeavyLoadersSlowComponent {
@Input({required: true}) cssClass!: string;


constructor(){
  const start = Date.now();
  while(Date.now() - start < 4000){

  }
  console.log('loaded')
}

}
