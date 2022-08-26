import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-my-custom-card',
  template: `
    <mat-card>
      <mat-card-title>
        <ng-container *ngTemplateOutlet="title"></ng-container>
      </mat-card-title>
      <mat-card-actions align="end">
        <ng-container *ngTemplateOutlet="actions"></ng-container>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./my-custom-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyCustomCardComponent implements OnInit {
  @Input() title!: TemplateRef<any>;
  @Input() actions!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
