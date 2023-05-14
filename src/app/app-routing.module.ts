import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { LoginComponent } from './componentes/login/login.component';
import { AboutComponent } from './componentes/about/about.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectsComponent } from './componentes/proyects/proyects.component';
import { EducationComponent } from './componentes/education/education.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { ContactComponent } from './componentes/contact/contact.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'portfolio', component:PortfolioComponent, children:[
    {path:'about', component:AboutComponent},
    {path:'skills', component:SkillsComponent},
    {path:'proyects', component:ProyectsComponent},
    {path:'education', component:EducationComponent},
    {path:'experience', component:ExperienceComponent},
    {path:'contact', component:ContactComponent}
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [
  LoginComponent,
  PortfolioComponent,
  SkillsComponent,
  ProyectsComponent,
  EducationComponent,
  ExperienceComponent,
  ContactComponent
]