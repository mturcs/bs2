import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';
import { kMaxLength } from 'buffer';

@Injectable()
export class LoginService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const toDay = new Date

    
    const questions: QuestionBase<string>[] = [

    
      new TextboxQuestion({
        key: 'userName',
        label: 'Username',
        type: 'email',
        value: ' ',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'passWord',
        label: 'Password',
        required: true,
        type: 'password',
        order: 2
      }),
      

    ];


    return of(questions.sort((a, b) => a.order - b.order));
  }
  suplTest() {
    console.log("Hallo")
  }
  


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/