import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {ClipboardModule} from '@angular/cdk/clipboard';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PapersComponent } from './papers/papers.component';
import { OverviewComponent } from './overview/overview.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PapersComponent,
    OverviewComponent,
    DownloadsComponent,
    NavbarComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
