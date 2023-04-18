import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
      DashboardComponent,
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        DashboardModule,
        EstudiantesModule
    ]
})
export class AppModule { }
