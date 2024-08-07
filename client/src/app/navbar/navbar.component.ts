import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,BsDropdownModule,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private router = inject(Router);
  accounService = inject(AccountService);
  private toastr=inject(ToastrService);
  model:any={};

  login(){
    this.accounService.login(this.model).subscribe({
        next:_=>{
          this.router.navigateByUrl('/members');
        },
        error:error=>this.toastr.error(error.error)
      });
  }
  logout(){
    this.router.navigateByUrl('/');
  }
}
