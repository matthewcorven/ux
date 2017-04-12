import {customElement, bindable, ViewResources, View, processAttributes} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {StyleEngine} from '../styles/style-engine';
import {Themable} from '../styles/themable';
import {processDesignAttributes} from '../designs/design-attributes';

@inject(Element, ViewResources, StyleEngine)
@customElement('ux-checkbox')
@processAttributes(processDesignAttributes)
export class UxButton implements Themable {
  @bindable public type = null;
  @bindable public size = null;
  @bindable public effect = null;
  @bindable public disabled = false;
  @bindable public theme = null;

  public view: View;

  constructor(public element: Element, public resources: ViewResources, private styleEngine: StyleEngine) {}

  public created(_: any, myView: View) {
    this.view = myView;
  }

  public bind() {
    if (this.theme) {
      this.styleEngine.applyTheme(this, this.theme);
    }
  }

  public themeChanged(newValue: any) {
    this.styleEngine.applyTheme(this, newValue);
  }
}