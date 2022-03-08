import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/login.service';
import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {

  userList: User[]=[];

  constructor(private sServ: SearchBarService, private lServ: LoginService) { }

  ngOnInit(): void {
  }

  
}
