import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../animes.service';
import { Animes } from '../animes';

@Component({
  selector: 'app-animes-list',
  templateUrl: './animes-list.component.html',
  styleUrls: ['./animes-list.component.css']
})
export class AnimesListComponent implements OnInit {
  animes: Array<Animes>=[]
  selectedAnime!:Animes;
  selected:boolean = false;
  constructor(private animeService:AnimesService) { }
getAnimes(){
  this.animeService.getAnimes().subscribe(apiData=>
    this.animes=apiData);
  
}
  ngOnInit() {
    this.getAnimes();
  }

}
