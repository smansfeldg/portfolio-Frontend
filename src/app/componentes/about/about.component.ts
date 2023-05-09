import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  miporfolio:any;
  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit(): void{
    this.datosPorfolio.ObtenerDatos().subscribe(data =>{
      console.log(data);
      this.miporfolio=data;
    });
  }

}
