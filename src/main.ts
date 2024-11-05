import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserPlatformLocation } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './app/component/home/home.component';
import { FormComponent } from './app/component/form/form.component';
import { SubComponent } from './app/component/sub/sub.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'form', 
    component: FormComponent,
    children: [
      { path: 'sub', component: SubComponent } // Sub-ruta
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule, RouterModule, MatToolbarModule, BrowserAnimationsModule)
  ]
}).catch((err) => console.error(err));
