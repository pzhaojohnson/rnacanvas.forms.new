import * as textStyles from './Text.module.css';

import { StructureText } from './StructureText';

export class ExampleStructure {
  readonly domNode = document.createElement('div');

  readonly #instructions = new Instructions();

  readonly #nameLine = new StructureText(
    '>Name'
  );

  readonly #sequenceLine = new StructureText(
    'CUAUUACUGUAAGUCUCCCACUCUCCAGCGCUAUC'
  );

  readonly #dotBracketLine = new StructureText(
    '......(((..(((.....)))...))).......'
  );

  constructor() {
    this.domNode.style.marginTop = '33px';

    this.domNode.append(this.#instructions.domNode);

    this.#nameLine.domNode.style.marginTop = '32px';

    [
      this.#nameLine,
      this.#sequenceLine,
      this.#dotBracketLine,
    ].forEach(line => this.domNode.append(line.domNode));
  }
}

class Instructions {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(textStyles['text']);

    this.domNode.textContent = 'For example, try copying and pasting the structure below:';
  }
}
