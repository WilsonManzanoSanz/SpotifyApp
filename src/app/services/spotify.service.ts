import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  /*
  {
    "access_token": "BQBXNcW0g6NvZMzR6c2vmQZepz0T2CF-ln06_Ce0VvsFmwGyVVGLzEu6VYWrLVyyt5i_w0lTlzxuE5q9aWiLBg",
    "token_type": "Bearer",
    "expires_in": 3600
}

*/

  urlSpotify:string="https://api.spotify.com/";
  urlVersion:string="v1/"
  artists:any[];

  urlSearch:string = this.urlSpotify + this.urlVersion + "search";
  urlArtist:string = this.urlSpotify + this.urlVersion + "artists";



  constructor(private http:Http) { }

  getArtist(artist:string){
  	//console.log("https://api.spotify.com/v1/search");

    let headers = new Headers();
    headers.append('authorization','Bearer BQAa7LPI8UiP4a94DBeW7s0z_wZAUIyDsHJCgY_x3PO-LeEPIbNVVmoL88uGXnhav1iLc-oTyQlgNvWiMJJQPQ');
    let query = "?q=$" + artist + "&type=artist";
    let url = this.urlSearch + query;

    return this.http.get(url, {headers})
        .map(res =>{
          /*console.log(res);

          if (res.status==200){
            console.log("C mamut");
          }
          */
          console.log(this.artists);
          this.artists = res.json().artists.items;
          return res.json().artists.items;
    })
  }


  getspecificArtist(id:string){
  	//console.log("https://api.spotify.com/v1/search");

    let headers = new Headers();
    headers.append('authorization','Bearer BQAa7LPI8UiP4a94DBeW7s0z_wZAUIyDsHJCgY_x3PO-LeEPIbNVVmoL88uGXnhav1iLc-oTyQlgNvWiMJJQPQ');
    let query = "/" + id;
    let url = this.urlArtist + query;

    return this.http.get(url, {headers})
        .map(res =>{
          console.log(res.json());
          return res.json();
          //this.artists = res.json().artists.items;
          //return res.json().artists.items;
    })
  }

  getTopMusicArtist(id:string){

    let headers = new Headers();
    headers.append('authorization','Bearer BQAa7LPI8UiP4a94DBeW7s0z_wZAUIyDsHJCgY_x3PO-LeEPIbNVVmoL88uGXnhav1iLc-oTyQlgNvWiMJJQPQ');
    let query = "/" + id + "/top-tracks?country=US";
    let url = this.urlArtist + query;

    return this.http.get(url, {headers})
        .map(res =>{
          console.log(res.json().tracks);
          return res.json().tracks;
          //this.artists = res.json().artists.items;
          //return res.json().artists.items;
    })

  }

}
