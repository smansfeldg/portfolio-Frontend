import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.form=this.formBuilder.group(
      {
        
      }
    )
  }

  ngOnInit(): void {
    
  }

}
