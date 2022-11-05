import { NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components';
import { HomePage } from './home';

@NgModule({
  declarations: [HomePage],
  imports: [ComponentsModule, NgIf, NgForOf],
})
export class PagesModule {}
