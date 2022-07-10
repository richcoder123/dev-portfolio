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
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import { ComingUpComponent } from './components/coming-up/coming-up.component'

const appRoutes = [
  { path: '', component: AboutMeComponent},
  { path: 'aboutMe', component: AboutMeComponent},
  { path: 'techSkills', component: TechSkillsComponent},
  { path: 'workExp', component: WorkExpComponent},
  { path: 'contactDetails', component: ContactDetailsComponent},
  { path: 'comingUp', component: ComingUpComponent},
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
    SectionComponent,
    ComingUpComponent
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
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
