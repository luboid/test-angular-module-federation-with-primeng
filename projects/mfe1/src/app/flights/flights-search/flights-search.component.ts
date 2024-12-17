import {Component} from '@angular/core';

// PrimeNG
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-flights-search',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css']
})
export class FlightsSearchComponent {

  search(): void {
    alert('Not implemented for this demo!');
  }

  terms(): void {
    alert('Not implemented for this demo!');
  }

}
