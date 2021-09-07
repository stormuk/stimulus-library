import {installsTrixBehaviour} from "../../mixins/installsTrixBehaviour";
import {BaseController} from "../../utilities/base_controller";

export class NoFileUploadsController extends BaseController {

  get selectors(): string {
    return [
      '.trix-button-group.trix-button-group--file-tools'
    ].join(', ');
  }

  initialize() {
    this.preventUploads = this.preventUploads.bind(this);
  }

  connect() {
    installsTrixBehaviour(this);
  }

  install({toolbar}: { toolbar: HTMLElement, editor: HTMLElement }) {
    // @ts-ignore
    toolbar.querySelectorAll('.trix-button-group.trix-button-group--file-tools').forEach(el => el.style.display = 'none');
    this.el.addEventListener('trix-file-accept', this.preventUploads);
  }

  uninstall({toolbar}: { toolbar: HTMLElement, editor: HTMLElement }) {
    // @ts-ignore
    toolbar.querySelectorAll('.trix-button-group.trix-button-group--file-tools').forEach(el => el.style.display = null);
    this.el.removeEventListener('trix-file-accept', this.preventUploads);
  }

  preventUploads(e: Event) {
    e?.preventDefault();
  }
}