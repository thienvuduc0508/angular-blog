import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'loader',
    template:`
    @if(show) {
        <div class="sk-spinner sk-spinner-wave">
        <div class="sk-rect1"></div>
        <div class="sk-rect2"></div>
        <div class="sk-rect3"></div>
        <div class="sk-rect4"></div>
        <div class="sk-rect5"></div>
        </div>    
    }
    `,
    imports: [],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoaderComponent {

    @Input() show: boolean = false;
}