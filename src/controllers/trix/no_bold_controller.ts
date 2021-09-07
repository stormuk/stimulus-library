import {installsTrixBehaviour} from "../../mixins/installsTrixBehaviour";
import {BaseController} from "../../utilities/base_controller";

export class NoBoldListController extends BaseController {

  get selectors(): string {
    return [
      '.trix-button--icon-bold',
    ].join(', ');
  }

  connect() {
    installsTrixBehaviour(this);
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