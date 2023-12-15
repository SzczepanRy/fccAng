import { InjectionToken } from '@angular/core';
import { AppConfig } from './appconfig.interface';
import { environment } from 'src/environments/environment';
export const APP_SERVICE_CONF = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
  url: environment.url,
};
