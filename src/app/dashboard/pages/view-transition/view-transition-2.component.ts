import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="Transition 2"></app-title>

    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        width="200"
        height="300"
        alt="dog"
        style="view-transition-name: hero1"
      />
      <div
        style="view-transition-name: hero2"
        class="bg-blue-500 w-6 h-6 rounded"
      ></div>
    </section>
  `,
})
export class ViewTransitionComponent {}
