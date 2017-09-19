import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../../services/spotify.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  value:string="";

  constructor( private spotifyService:SpotifyService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params =>{
      this.spotifyService.getArtist(params['people']).subscribe(data=>{

      });
    });
  }

  ngOnInit() {

  }

  searchArtist(){

    this.spotifyService.getArtist(this.value).subscribe(data=>{

    });
  }

}
