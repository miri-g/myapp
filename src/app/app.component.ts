import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



@Injectable()
export class AppComponent {
  title = 'GitHub Repositories';
  search_text=""
  res={};

  constructor(private http: HttpClient) { }
  getRepo(search: string) {
    
   this.http.get('https://api.github.com/search/repositories?q=' + search)
    .subscribe(data =>{this.res = data; console.log(data);} );
  }
  set(id: string) { }
 }

