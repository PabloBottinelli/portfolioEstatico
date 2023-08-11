import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { BodyComponent } from './components/body/body.component';
import { WorksComponent } from './components/works/works.component';
import { WorkCardComponent } from './components/work-card/work-card.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { StudiesComponent } from './components/studies/studies.component';
import { TechItemComponent } from './components/tech-item/tech-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    BodyComponent,
    WorksComponent,
    WorkCardComponent,
    TechnologiesComponent,
    StudiesComponent,
    TechItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    AboutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
