import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordComponent } from "./password/password.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PasswordComponent]
})
export class AppComponent {
  title = 'password';
}
