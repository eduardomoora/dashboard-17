import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule,TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styles: ``,
})
export class UsersComponent {

  public userService: UsersService = inject(UsersService);

constructor(){
}


}
