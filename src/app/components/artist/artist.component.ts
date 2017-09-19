import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist:any;
  topmusic:any[];
  id:string;

  constructor(private activatedRoute:ActivatedRoute, private spotifyService:SpotifyService) {

        this.activatedRoute.params.subscribe(params =>{
            this.id = params['id'];
            let id = params['id'];
            console.log(id)
            this.spotifyService.getspecificArtist(id)
              .subscribe(dates => this.artist = dates);
            this.spotifyService.getTopMusicArtist(id)
              .subscribe(dates => {this.topmusic = dates});

      });

   }

  ngOnInit() {

  }

}
