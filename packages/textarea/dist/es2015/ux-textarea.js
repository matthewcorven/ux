var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, bindable } from 'aurelia-templating';
import { DOM } from 'aurelia-pal';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine, normalizeBooleanAttribute, getBackgroundColorThroughParents } from '@aurelia-ux/core';
import { observable, computedFrom } from 'aurelia-framework';
// tslint:disable-next-line: no-submodule-imports
import '@aurelia-ux/core/components/ux-input-component.css';
// tslint:disable-next-line: no-submodule-imports
import '@aurelia-ux/core/components/ux-input-component--outline.css';
let UxTextArea = class UxTextArea {
    constructor(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.autofocus = null;
        this.autoResize = false;
        this.disabled = false;
        this.focus = false;
        this.readonly = false;
        this.variant = 'filled';
        this.dense = false;
        this.value = undefined;
        Object.setPrototypeOf(element, uxTextAreaElementProto);
    }
    bind() {
        const element = this.element;
        const textbox = this.textbox;
        if (this.autofocus || this.autofocus === '') {
            this.focus = true;
        }
        this.dense = normalizeBooleanAttribute('dense', this.dense);
        if (this.cols) {
            textbox.setAttribute('cols', this.cols.toString());
            element.removeAttribute('cols');
        }
        if (this.rows) {
            textbox.setAttribute('rows', this.rows.toString());
            element.removeAttribute('rows');
        }
        if (this.minlength) {
            textbox.setAttribute('minlength', this.minlength.toString());
        }
        if (this.maxlength) {
            textbox.setAttribute('maxlength', this.maxlength.toString());
        }
        this.themeChanged(this.theme);
        this.autocompleteChanged(this.autocomplete);
    }
    attached() {
        const textbox = this.textbox;
        this.isAttached = true;
        this.textbox.addEventListener('change', stopEvent);
        this.textbox.addEventListener('input', stopEvent);
        this.fitTextContent();
        textbox.addEventListener('change', stopEvent);
        textbox.addEventListener('input', stopEvent);
        this.variantChanged(this.variant);
    }
    detached() {
        const textbox = this.textbox;
        this.isAttached = false;
        textbox.removeEventListener('change', stopEvent);
        textbox.removeEventListener('input', stopEvent);
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        const oldValue = this.value;
        const newValue = value === null || value === undefined ? null : value.toString();
        if (oldValue !== newValue) {
            this.value = newValue;
            this.ignoreRawChanges = true;
            this.rawValue = newValue === null ? '' : newValue.toString();
            this.fitTextContent();
            this.ignoreRawChanges = false;
            this.element.dispatchEvent(DOM.createCustomEvent('change', { bubbles: true }));
        }
    }
    autocompleteChanged(newValue) {
        if (newValue != null) {
            this.textbox.setAttribute('autocomplete', newValue);
        }
        else {
            this.textbox.removeAttribute('autocomplete');
        }
    }
    rawValueChanged(newValue) {
        this.element.classList.toggle('ux-input-component--has-value', typeof newValue === 'string' && newValue.length > 0);
        if (this.ignoreRawChanges) {
            return;
        }
        this.setValue(newValue);
    }
    themeChanged(newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'textarea';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    }
    fitTextContent() {
        if (this.isAttached && (this.autoResize || this.autoResize === '')) {
            this.textbox.style.height = 'auto';
            this.textbox.style.height = `${this.textbox.scrollHeight + 2}px`;
        }
    }
    focusChanged(focus) {
        focus = focus || focus === '' ? true : false;
        this.element.classList.toggle('ux-input-component--focused', focus);
        this.element.dispatchEvent(DOM.createCustomEvent(focus ? 'focus' : 'blur', { bubbles: true }));
    }
    variantChanged(newValue) {
        this.element.style.backgroundColor = newValue === 'outline' ?
            this.element.style.backgroundColor = getBackgroundColorThroughParents(this.element) :
            '';
    }
    get placeholderMode() {
        return typeof this.label !== 'string' || this.label.length === 0;
    }
};
__decorate([
    bindable
], UxTextArea.prototype, "autocomplete", void 0);
__decorate([
    bindable
], UxTextArea.prototype, "autofocus", void 0);
__decorate([
    bindable
], UxTextArea.prototype, "autoResize", void 0);
__decorate([
    bindable
], UxTextArea.prototype, "cols", void 0);
__decorate([
    bindable
], UxTextArea.prototype, "disabled", void 0);
__decorate([
    bindable
], UxTextArea.prototype, "focus", void 0);
__decorate([
    bindable
], UxTextArea.prototype, "maxlength", void 0);
__decorate([
    bindable
], UxTextArea.prototype, "minlength", void 0);
__decorate([
    bindable
], UxTextArea.prototype, "readonly", void 0);
__decorate([
    bindable
], UxTextArea.prototype, "rows", void 0);
__decorate([
    bindable
], UxTextArea.prototype, "label", void 0);
__decorate([
    bindable
], UxTextArea.prototype, "placeholder", void 0);
__decorate([
    bindable
], UxTextArea.prototype, "theme", void 0);
__decorate([
    bindable
], UxTextArea.prototype, "variant", void 0);
__decorate([
    bindable
], UxTextArea.prototype, "dense", void 0);
__decorate([
    observable({ initializer: () => '' })
], UxTextArea.prototype, "rawValue", void 0);
__decorate([
    computedFrom('label')
], UxTextArea.prototype, "placeholderMode", null);
UxTextArea = __decorate([
    inject(Element, StyleEngine),
    customElement('ux-textarea')
], UxTextArea);
export { UxTextArea };
function stopEvent(e) {
    e.stopPropagation();
}
const getVm = (_) => _.au.controller.viewModel;
const uxTextAreaElementProto = Object.create(HTMLElement.prototype, {
    value: {
        get() {
            return getVm(this).getValue();
        },
        set(value) {
            getVm(this).setValue(value);
        }
    }
});
//# sourceMappingURL=ux-textarea.js.map