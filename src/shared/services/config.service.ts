import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  toolbarTitle = '';

  constructor() { }

  changeTitle(toolbarTitle: string) {
    this.toolbarTitle = toolbarTitle;
  }

  getTitle(): Observable<string> {
    return of(this.toolbarTitle);
  }
}
