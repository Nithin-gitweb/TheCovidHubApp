import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/Services/AuthService/authentication-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  profile: string;

  constructor(private auth:AuthenticationServiceService) { }

  ngOnInit(): void {
    this.auth.getProfileObs().subscribe(profile => this.profile = profile);

  }

}
