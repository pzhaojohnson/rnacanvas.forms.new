import * as styles from './Text.module.css';

export class TrailingNote {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(styles['text']);

    this.domNode.textContent = 'In general, RNAcanvas tries to support common structure formats (e.g., RNAfold results page output, Mfold output).';

    this.domNode.style.marginTop = '34px';
  }
}
