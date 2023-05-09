import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList:any
  constructor(private datosPorfolio:PorfolioService){}
  
  ngOnInit(): void{
    this.datosPorfolio.ObtenerDatos().subscribe(data=>{
      this.educationList=data.education;
    })
  }
}
