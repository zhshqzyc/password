import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent {
  public passwordStrengthPercent = 0;

  private currentPassword = '';

  public set password(value: string) {
    this.currentPassword = value;
    this.updatePasswordStrength(value);
  }

  public get password(): string {
    return this.currentPassword;
  }

  public get is8CharactersOrGreater(): boolean {
    return this.currentPassword.length >= 8;
  }

  public get hasOneCapitalLetterOrMore(): boolean {
    return /(.*[A-Z].*)/.test(this.currentPassword);
  }

  public get hasOneNumberOrMore(): boolean {
    return /(.*\d.*)/.test(this.currentPassword);
  }

  public get hasOneSpecialCharacterOrMore(): boolean {
    return /\W|_/g.test(this.currentPassword);
  }

  private updatePasswordStrength(value: string): void {
    let passwordStrength = 0;

    if (this.is8CharactersOrGreater) {
      passwordStrength += 25;
    }

    if (this.hasOneCapitalLetterOrMore) {
      passwordStrength += 25;
    }

    if (this.hasOneNumberOrMore) {
      passwordStrength += 25;
    }

    if (this.hasOneSpecialCharacterOrMore) {
      passwordStrength += 25;
    }

    this.passwordStrengthPercent = passwordStrength;
  }
}
