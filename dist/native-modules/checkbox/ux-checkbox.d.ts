import { ViewResources, View } from 'aurelia-templating';
import { StyleEngine } from '../styles/style-engine';
import { Themable } from '../styles/themable';
export declare class UxCheckbox implements Themable {
    element: HTMLElement;
    resources: ViewResources;
    private styleEngine;
    disabled: any;
    effect: null;
    label: string;
    matcher: (a: any, b: any) => boolean;
    model: any;
    tabindex: number;
    theme: null;
    checked: any;
    value: any;
    view: View;
    private checkbox;
    private ripple;
    readonly isDisabled: boolean;
    constructor(element: HTMLElement, resources: ViewResources, styleEngine: StyleEngine);
    created(_: any, myView: View): void;
    bind(): void;
    themeChanged(newValue: any): void;
    checkedChanged(): void;
    toggleCheckbox(): void;
    onKeyup(e: KeyboardEvent): void;
    onMouseDown(e: MouseEvent): void;
    onMouseUp(e: MouseEvent): void;
}
