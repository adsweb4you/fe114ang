import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   title  = new FormControl();
   email  = new FormControl();
   text  = new FormControl();

   myform(){
     console.log(
       this.text.value,
       this.title.value,
       this.email.value
     )
   }

   setvalue(){
     this.title.setValue(21312)
   }

  // modelChangeFn(event:any){
  //   // let bodys = document.body as HTMLBodyElement
  //   //document.body.style.backgroundColor = event;
  // }


  Login = new FormGroup({
    emails: new FormControl('', [Validators.minLength(6), Validators.pattern("^[a-z0-9_-]{8,15}$")]),
    password: new   FormControl('', [Validators.required]),
  })

  setpactvalue(){
    this.Login.patchValue({
      emails:"info@ss.ge",
      password:"1212`12`12"
    })
  }

  get emails(){
    return this.Login.get('emails');
  }

  get password(){
    return this.Login.get('password');
  }

  geobj(){
    console.log(this.Login.value)
  }

}
