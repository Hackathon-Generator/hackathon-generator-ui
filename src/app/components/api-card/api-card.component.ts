import { Component, Input } from '@angular/core';
import { ApiInterface } from '../../interfaces';

@Component({
  selector: 'hg-api-card[api]',
  templateUrl: 'api-card.component.html',
  styleUrls: ['api-card.component.scss'],
})
export class ApiCardComponent {
  @Input() public api!: ApiInterface;
}
