import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { headersInterceptor } from '../component/core/interceptors/headers-interceptor';
import { errorInterceptor } from '../component/core/interceptors/error-interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { screenloadingInterceptor } from '../component/core/interceptors/screenloading-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(),withInterceptors([headersInterceptor,errorInterceptor,screenloadingInterceptor])),
    provideAnimations(),
    importProvidersFrom(NgxSpinnerModule ),
    provideToastr(), 
  ]
};

