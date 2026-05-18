import * as styles from './Text.module.css';

export class MultipleStructuresTip {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(styles['text']);

    this.domNode.style.marginTop = '36px';

    let Tip = document.createElement('span');

    Tip.textContent = 'Tip:';

    Tip.style.fontWeight = '700';

    this.domNode.append(Tip, ' Multiple sequences and structures can be pasted and dropped into a single drawing.');
  }
}
