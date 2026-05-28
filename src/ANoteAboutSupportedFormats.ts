import * as styles from './Text.module.css';

export class ANoteAboutSupportedFormats {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(styles['text']);

    this.domNode.textContent = 'In general, RNAcanvas tries to support common sequence and structure formats (e.g., RNAfold results page output, mfold CT files, copying and pasting a sequence from GenBank).';

    this.domNode.style.marginTop = '37px';
  }
}
