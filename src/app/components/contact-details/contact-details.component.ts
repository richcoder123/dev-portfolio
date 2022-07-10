import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  feedbackText = `We all need people who will give us feedback. That's how we improve.
  Feel free to drop feedback or any comments that you have.
  Also, you can use this to reach out to me or to invite me to a tech-talk or meetup.`;

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

  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar) {
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
          this._snackBar.open('Submitted successfully, Thank you !','', {
            horizontalPosition: 'left',
            verticalPosition: 'top'
          });
          this.contactForm.reset();
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
