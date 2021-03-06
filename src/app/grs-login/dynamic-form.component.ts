import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { QuestionBase } from '../form-factory/question-base';
import { QuestionControlService } from '../form-factory/question-control.service';
import { UsernameValidator } from './grs-login.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
    this.form.controls["firstName"].addValidators([UsernameValidator.cannotContainSpace])
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    console.log("FORMVALUE",this.form.value["hallo"])
  }

  

  
}
export var payLoad:string, form:FormGroup



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/