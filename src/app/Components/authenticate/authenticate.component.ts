import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationServiceService } from 'src/app/Services/AuthService/authentication-service.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  constructor(private auth:AuthenticationServiceService) { }
  profile:string;
  ngOnInit(): void 
  {
    this.auth.getProfileObs().subscribe(profile => this.profile = profile);

  }
  profileForm = new FormGroup({
    Email: new FormControl(''),
    password: new FormControl('')
  })
  login(){
    let email = this.profileForm.get('Email').value
    let password = this.profileForm.get('password').value
    this.auth.loginAuthenticate(email, password).subscribe(result => {console.log(result);
    })
    this.auth.setProfileObs("Yes")
    console.log(email);
    
  }
  

}
