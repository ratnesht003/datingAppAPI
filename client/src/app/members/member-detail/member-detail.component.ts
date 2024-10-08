import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { ActivatedRoute } from '@angular/router';
import {Member } from '../../_models/member';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent implements OnInit {
private  memberService=inject(MembersService);
private route =inject(ActivatedRoute);
member?: Member;

ngOnInit(): void {
  
}
// loadMember(): void {
//   const username: string | null = this.route.snapshot.paramMap.get('username');
//   if (!username) return;

//   this.memberService.getMember(username).subscribe({
//     next: member=> this.member = member
//   });
// }


}
