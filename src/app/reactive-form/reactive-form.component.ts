import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  form: FormGroup;

  countries: Array<any> = [
    { name: 'India', value: 'india' },
    { name: 'France', value: 'france' },
    { name: 'USA', value: 'USA' },
    { name: 'Germany', value: 'germany' },
    { name: 'Japan', value: 'Japan' },
  ];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: [null, [Validators.required, Validators.minLength(10)]],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      country: [null, [Validators.required]],
    });
  }

  changeCountry(event: any) {
    console.log(event.value);
  }

  submit() {
    console.log(this.form.value);
  }
}
