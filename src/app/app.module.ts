import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AboutComponent } from './componentes/about/about.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectsComponent } from './componentes/proyects/proyects.component';
import { EducationComponent } from './componentes/education/education.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { FooterComponent } from './componentes/footer/footer.component';
// Importar HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { SkillEditComponent } from './componentes/skills/skill-edit/skill-edit.component';
import { SkillAddItemComponent } from './componentes/skills/skill-add-item/skill-add-item.component';
import { SkillItemComponent } from './componentes/skills/skill-item/skill-item.component';
import { SkillListComponent } from './componentes/skills/skill-list/skill-list.component';
import { EditComponentComponent } from './componentes/edit-component/edit-component.component';
import { AddButtonComponent } from './componentes/edit-component/add-button/add-button.component';
import { DeleteButtonComponent } from './componentes/edit-component/delete-button/delete-button.component';
import { EditButtonComponent } from './componentes/edit-component/edit-button/edit-button.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    ProyectsComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    SkillEditComponent,
    SkillAddItemComponent,
    SkillItemComponent,
    SkillListComponent,
    EditComponentComponent,
    AddButtonComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
