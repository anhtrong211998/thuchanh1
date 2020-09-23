import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Component } from './bai3/bai3.component';
import { Bai4Component } from './bai4/bai4.component';
import { Bai5Component } from './bai5/bai5.component';
import { Bai6Component } from './bai6/bai6.component';
import { Bai7Component } from './bai7/bai7.component';
import { Bai8Component } from './bai8/bai8.component';

const routes: Routes = [
  {
    path: 'bai1',
    component: Bai1Component,
  },
  {
    path: 'bai2',
    component: Bai2Component,
  },
  {
    path: 'bai4',
    component: Bai4Component,
  },
  {
    path: 'bai5',
    component: Bai5Component,
  },
  {
    path: 'bai6',
    component: Bai6Component,
  },
  {
    path: 'bai7',
    component: Bai7Component,
  },
  {
    path: 'bai8',
    component: Bai8Component,
  },
  {
    path: 'bai3',
    component: Bai3Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
