import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  detail:boolean=true

  constructor(private router: Router,private location: Location) { }

  ngOnInit(): void {
    if(this.location.path()==''){
      this.detail=true
    }else{
      this.detail=false
    }

  }

  goToList(){
    this.router.navigate([``]);
  }

}
