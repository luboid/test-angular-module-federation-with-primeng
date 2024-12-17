import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

// PrimeNG
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ButtonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';
}
