import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(


  	private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
        ) { }

  ngOnInit() {
  }

   logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

}
