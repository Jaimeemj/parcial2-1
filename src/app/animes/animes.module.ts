import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesComponent } from './animes.component';
import { AnimesDetailComponent } from './animes-detail/animes-detail.component';
import { AnimesListComponent } from './animes-list/animes-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnimesComponent,AnimesDetailComponent,AnimesListComponent],
  exports:[AnimesComponent]
})
export class AnimesModule { }
