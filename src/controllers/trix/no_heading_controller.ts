import {installsTrixBehaviour} from "../../mixins/installsTrixBehaviour";
import {BaseController} from "../../utilities/base_controller";

export class NoHeadingController extends BaseController {

  connect() {
    installsTrixBehaviour(this);
  }

  get selectors(): string {
    return [
      '.trix-button--icon-heading-1',
    ].join(', ');
  }

  install({toolbar}: { toolbar: HTMLElement, editor: HTMLElement }) {
    // @ts-ignore
    toolbar.querySelectorAll(this.selectors).forEach(el => el.style.display = 'none');
  }

  uninstall({toolbar}: { toolbar: HTMLElement, editor: HTMLElement }) {
    // @ts-ignore
    toolbar.querySelectorAll(this.selectors).forEach(el => el.style.display = null);
  }

}