import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor( private api:GetApiService )
  {

  }
  ngOnInit() //call the fetch function
  {
    this.api.apiCall().subscribe((data)=>{
      console.log("get api data",data);
    })
  }
}
