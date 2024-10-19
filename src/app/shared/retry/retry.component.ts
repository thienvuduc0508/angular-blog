import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
    selector: 'retry',
    imports: [TranslateModule],
    template: `
    @if(show) {
        <div class="alert alert-danger text-center">
            <span>{{ message || 'COMMON.GeneralError' | translate}}</span>
            <br/> <br/>
            <button class="btn btn-warning" type="button" (click)="onClick.emit()"><i class="fa fa-refresh"></i>&nbsp;{{'Retry' | translate}}</button>
        </div>
    }
    `,
    standalone: true,
})

export class RetryComponent {
    @Input() show: boolean = false;
    @Input() message: string = '';
    @Output() onClick = new EventEmitter<void>();
}