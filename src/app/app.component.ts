import { Component, OnInit } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  movies:any;

  constructor( private api:GetApiService ){ }

  ngOnInit() :void
  {
    this.api.getApi().subscribe(Response=>{ 

      this.movies=Response;
      console.log(Response);
    });
  }

}