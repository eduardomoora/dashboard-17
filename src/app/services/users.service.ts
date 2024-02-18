import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { ResponseUser, User, UserResponse } from '@interfaces/req-response';
import { Observable, delay, map, tap } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http: HttpClient = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: [],
  });

  users = computed(() => this.#state().users);
  loading = computed(() => this.#state().loading);

  constructor() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http
      .get<UserResponse>('https://reqres.in/api/users')
      .pipe(
        delay(1500),
        tap((data: UserResponse) => {
          this.#state.set({
            loading: false,
            users: data.data,
          });
        })
      )
      .subscribe();
  }

  getUserById(id: number): Observable<User> {
    return this.http
      .get<ResponseUser>(`https://reqres.in/api/users/${id}`).pipe(
        map(res=> res.data)
      )
  }
}
