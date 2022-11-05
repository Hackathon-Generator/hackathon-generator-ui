import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components';
import { HomePage } from './home';

@NgModule({
  declarations: [HomePage],
  imports: [ComponentsModule],
})
export class PagesModule {}
