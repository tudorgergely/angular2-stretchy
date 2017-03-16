import {StretchyDirective} from "./stretchy.directive";
import {NgModule} from "@angular/core";

@NgModule({
    declarations: [
        StretchyDirective
    ],
    exports: [
        StretchyDirective
    ]
})
export class StretchyModule { }
