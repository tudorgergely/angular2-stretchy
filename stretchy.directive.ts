import {Directive, HostBinding, OnInit, Renderer, ElementRef, HostListener} from "@angular/core";

@Directive({
    selector: '[stretchy]'
})
export class StretchyDirective implements OnInit {
    @HostBinding('style.width.px')
    private inputWidth: number = 0;

    private sizeDiv;

    constructor(private renderer: Renderer,
                private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.sizeDiv = this.renderer.createElement(this.elementRef.nativeElement.parentNode, 'div');

        const inputStyle = window.getComputedStyle(this.elementRef.nativeElement);
        Object.assign(this.sizeDiv.style, {
            visibility: 'hidden',
            position: 'absolute',
            top: '0',
            left: '0',
            whiteSpace: 'pre',
            fontSize: inputStyle.fontSize,
            fontFamily: inputStyle.fontFamily,
            fontWeight: inputStyle.fontWeight,
            fontStyle: inputStyle.fontStyle,
            letterSpacing: inputStyle.letterSpacing
        });
    }

    @HostListener('input', ['$event'])
    onKeyDown(e: KeyboardEvent) {
        this.sizeDiv.innerText = (<any>e.target).value;
        this.inputWidth = this.sizeDiv.getBoundingClientRect().width;
    }
}
