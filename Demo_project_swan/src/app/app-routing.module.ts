import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [

{
  path: '',
  component: HeaderComponent
},

  {
    path: 'detailPage',
    component: DetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


