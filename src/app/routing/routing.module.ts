import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayout } from '../layout';
import { HomePage, PagesModule } from '../pages';

const routes: Routes = [
  {
    path: '',
    component: PageLayout,
    children: [{ path: '', pathMatch: 'full', component: HomePage }],
  },
];

@NgModule({
  imports: [PagesModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
