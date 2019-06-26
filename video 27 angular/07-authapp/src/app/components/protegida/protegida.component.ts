import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


{}

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.scss']
})
export class ProtegidaComponent implements OnInit {

  public profile: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {

    if (this.authService.userProfile) {
      this.profile = this.authService.userProfile;
      console.log('this.profile: ', this.profile);
    } else {
      this.authService.getProfile((err, profile) => {
        this.profile = profile;
        console.log('this.profile: ', this.profile);
      });
    }


  }

}
