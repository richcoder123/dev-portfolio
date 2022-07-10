import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabGroup, MatTabLabel, MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { RouterModule } from '@angular/router';
import { TechSkillsComponent } from './components/tech-skills/tech-skills.component';
import { WorkExpComponent } from './components/work-exp/work-exp.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './utilities/components/card/card.component';
import { ChipsComponent } from './utilities/components/chips/chips.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { SectionComponent } from './utilities/components/section/section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

const appRoutes = [
  { path: '', component: AboutMeComponent},
  { path: 'aboutMe', component: AboutMeComponent},
  { path: 'techSkills', component: TechSkillsComponent},
  { path: 'workExp', component: WorkExpComponent},
  { path: 'contactDetails', component: ContactDetailsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    TechSkillsComponent,
    WorkExpComponent,
    ContactDetailsComponent,
    CardComponent,
    ChipsComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
