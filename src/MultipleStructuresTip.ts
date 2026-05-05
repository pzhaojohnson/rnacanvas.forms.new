import * as styles from './Text.module.css';

export class MultipleStructuresTip {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(styles['text']);

    this.domNode.style.marginTop = '30px';

    let Tip = document.createElement('span');

    Tip.textContent = 'Tip:';

    Tip.style.fontWeight = '700';

    this.domNode.append(Tip, ' Multiple structures can be pasted / dropped into a single drawing.');
  }
}
