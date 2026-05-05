import * as styles from './Link.module.css';

export class Link {
  readonly domNode = document.createElement('span');

  constructor(textContent: string) {
    this.domNode.classList.add(styles['link']);

    this.domNode.textContent = textContent;
  }
}
