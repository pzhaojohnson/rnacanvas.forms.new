import * as styles from './Title.module.css';

export class Title {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(styles['title']);

    this.domNode.textContent = 'Create a new drawing';
  }
}
