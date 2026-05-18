import * as styles from './Text.module.css';

import { detectMacOS } from '@rnacanvas/utilities';

export class ErrorMessagesLocation {
  readonly domNode = document.createElement('p');

  readonly #errorMessages = BoldText('error messages');

  readonly #devToolsKeyBinding = BoldText(detectMacOS() ? 'Option+Command+I' : 'Ctrl+Shift+I');

  readonly #Console = BoldText('Console');

  constructor() {
    this.domNode.classList.add(styles['text']);

    this.#errorMessages.style.color = 'cyan';

    let errorMessages = this.#errorMessages;

    let devToolsKeyBinding = this.#devToolsKeyBinding;

    let Console = this.#Console;

    this.domNode.append('Any ', errorMessages, ' will appear in the web browser console (press ', devToolsKeyBinding, ' and go to the ', Console, ' tab to open).');

    this.domNode.style.marginTop = '37px';
  }
}

function BoldText(textContent: string) {
  let span = document.createElement('span');

  span.textContent = textContent;

  span.style.fontWeight = '700';

  return span;
}
