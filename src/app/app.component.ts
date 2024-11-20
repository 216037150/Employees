import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EInfoComponent } from "./e-info/e-info.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, EInfoComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employees';
}
