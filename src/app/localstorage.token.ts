import { InjectionToken } from '@angular/core';

export const LocalStorageToken = new InjectionToken<any>('local sotrage', {
  providedIn: 'root',

  factory() {
    return localStorage;
  },
});
