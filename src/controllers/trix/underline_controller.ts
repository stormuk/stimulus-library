import {installsTrixBehaviour} from "../../mixins/installsTrixBehaviour";
import {BaseController} from "../../utilities/base_controller";
// @ts-ignore
import * as Trix from 'trix';

export class UnderlineController extends BaseController {

  connect() {
    installsTrixBehaviour(this);
  }

  install({toolbar}: { toolbar: HTMLElement, editor: HTMLElement }) {
    let textTools = toolbar.querySelector('.trix-button-group.trix-button-group--text-tools');
    if (!textTools) {
      throw new Error('Could not find .trix-button-group--text-tools section in `<trix-toolbar>');
    }
    Trix.config.textAttributes.underline = {
      style: {"textDecoration": "underline"},
      inheritable: true,
    };

    let buttonHTML = '<button type="button" class="trix-button trix-button--icon trix-button--icon-underline" data-trix-attribute="underline" data-trix-key="u" tabindex="-1" title="Underline">U</button>';
    textTools.insertAdjacentHTML("beforeend", buttonHTML);
  }

  uninstall({toolbar}: { toolbar: HTMLElement, editor: HTMLElement }) {
    toolbar.querySelector('.trix-button-group.trix-button-group--text-tools .trix-button--icon-underline')?.remove();
  }
}