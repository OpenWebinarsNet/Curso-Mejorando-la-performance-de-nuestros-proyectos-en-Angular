import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-my-custom-button',
  template: `
    <button mat-raised-button color="primary">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./my-custom-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyCustomButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
