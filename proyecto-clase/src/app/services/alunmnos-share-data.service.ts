import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlunmnosShareDataService {

	private messageSource = new BehaviorSubject('default message');
	 currentMessage = this.messageSource.asObservable();

  constructor() { }


  alumnosChanged(message: string) {
    this.messageSource.next(message)
  }
}
