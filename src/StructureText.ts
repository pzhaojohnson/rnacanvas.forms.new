import * as textStyles from './Text.module.css';

import * as structureTextStyles from './StructureText.module.css';

export class StructureText {
  readonly domNode = document.createElement('p');

  constructor(textContent: string) {
    this.domNode.classList.add(textStyles['text'], structureTextStyles['structure-text']);

    this.domNode.textContent = textContent;
  }
}
