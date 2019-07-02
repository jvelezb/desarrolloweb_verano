import { Component, OnInit , Input} from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {User} from '../../models/user';

import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	@Input() currentUser:User;


  constructor(


  	private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
        ) { }

  ngOnInit() {
  	//console.log(currentUser);
  }

   logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

}
