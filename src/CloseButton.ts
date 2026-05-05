import * as styles from './CloseButton.module.css';

export class CloseButton {
  readonly domNode = document.createElement('p');

  constructor(onClick?: () => void) {
    this.domNode.classList.add(styles['close-button']);

    this.domNode.textContent = 'Close';

    onClick ? this.domNode.onclick = onClick : {};
  }
}
