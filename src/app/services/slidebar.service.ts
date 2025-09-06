import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SlidebarService {

  private _open$ = new BehaviorSubject<boolean>(false);
  open$ = this._open$.asObservable();

  toggle() {
    this._open$.next(!this._open$.value);
  }

  open() {
    this._open$.next(true);
  }

  close() {
    this._open$.next(false);
  }

  isOpen(): boolean {
    return this._open$.value;
  }
}
