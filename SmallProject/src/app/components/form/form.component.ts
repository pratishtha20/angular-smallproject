import { Component, OnInit } from '@angular/core';

class Form{
  id : number;
  firstname : string;
  lastname : string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  form : Form[]; //declaration

  submit(form_p: Form[]) {
        this.form = form_p;
    console.log("Pratishtha");
    console.log(this.form);
     }

}
