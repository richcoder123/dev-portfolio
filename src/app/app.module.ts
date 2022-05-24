import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { RouterModule } from '@angular/router';

const appRoutes = [
  { path: '', component: AppComponent},
  { path: 'aboutMe', component: AboutMeComponent},
  { path: 'techSkills', component: AppComponent},
  { path: 'workExp', component: AppComponent},
  { path: 'contact', component: AppComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    RouterModule.forChild(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
