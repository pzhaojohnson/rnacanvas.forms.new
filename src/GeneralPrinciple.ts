import * as styles from './Text.module.css';

import { HighlightedText } from './HighlightedText';

/**
 * General principle for creating new drawings.
 */
export class GeneralPrinciple {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(styles['text']);

    let CopyAndPaste = new HighlightedText('Copy-and-paste');

    let dragNDrop = new HighlightedText("drag-n'-drop");

    this.domNode.append(CopyAndPaste.domNode, ' a structure or ', dragNDrop.domNode, ' a file to create a new drawing.');
  }
}
