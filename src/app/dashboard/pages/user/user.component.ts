import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { Observable, delay, switchMap, take, tap } from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  templateUrl: './user.component.html',
  styles: ``,
})
export class UserComponent {
  private route = inject(ActivatedRoute);
  private _usersService: UsersService = inject(UsersService);
  public user = toSignal(this.fetchUser());
  public userTitle = computed(()=>   {
     return (this.user() ? 'User information: ' + this.user()?.first_name + ' '+ this.user()?.last_name  : '')
  });


  constructor() {}

  fetchUser(): Observable<User> {
    return this.route.params.pipe(
      delay(2000),
      switchMap(({id}) => this._usersService.getUserById(+id)),
    );
  }
}
