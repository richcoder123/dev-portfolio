import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  sectionConfig = [
    {
      title: 'E-mail',
      content: ['yesaman123@gmail.com']
    },
    {
      title: 'Contact Number',
      content: ['+91-928 4700 510']
    },
  ];
  contactForm: any;
  isFormDirty = true;

  constructor(private http: HttpClient) {
    this.contactForm = new FormGroup({
      name: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.email ]),
      message: new FormControl('', [ Validators.required ])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.post('https://formspree.io/f/mgeddkka',
      {
        name: this.contactForm.controls['name'].value,
        replyto: this.contactForm.controls['email'].value,
        message: this.contactForm.controls['message'].value 
      }).subscribe(
        response => {
          console.log(response);
        }
      );
  }

  showErrorText(formControlName: any) {
    return this.contactForm.controls[formControlName].touched && this.contactForm.controls[formControlName].errors;
    }

  isSubmitDisabled() {
    return !this.contactForm.valid;
  }

}
