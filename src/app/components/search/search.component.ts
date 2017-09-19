import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  value:string="";

  constructor( private spotifyService:SpotifyService) { }

  ngOnInit() {

  }

  searchArtist(){

    this.spotifyService.getArtist(this.value).subscribe(data=>{
    
    });
  }

}
