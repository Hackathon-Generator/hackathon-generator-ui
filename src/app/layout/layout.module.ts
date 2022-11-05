import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components';
import { PageLayout } from './page';

const COMPONENTS = [PageLayout];

@NgModule({
  imports: [RouterModule, ComponentsModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class LayoutModule {}
