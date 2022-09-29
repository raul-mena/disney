import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'src/app/components/card/card.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes: Routes = [
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
