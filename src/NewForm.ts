import * as styles from './NewForm.module.css';

import { Title } from './Title';

import { GeneralPrinciple } from './GeneralPrinciple';

import { InputFormatsDownload } from './InputFormatsDownload';

import { ExampleStructure } from './ExampleStructure';

import { TrailingNote } from './TrailingNote';

import { MultipleStructuresTip } from './MultipleStructuresTip';

import { CloseButton } from './CloseButton';

import { DragHandler } from '@rnacanvas/forms';

/**
 * The New form (with instructions for how to create new drawings of structures).
 */
export class NewForm {
  readonly domNode = document.createElement('div');

  readonly #title = new Title();

  readonly #contentContainer = document.createElement('div');

  readonly #generalPrinciple = new GeneralPrinciple();

  readonly #inputFormatsDownload = new InputFormatsDownload();

  readonly #exampleStructure = new ExampleStructure();

  readonly #trailingNote = new TrailingNote();

  readonly #multipleStructuresTip = new MultipleStructuresTip();

  readonly #closeButton = new CloseButton(() => this.close());

  readonly #dragHandler = new DragHandler(this.domNode);

  constructor() {
    this.domNode.classList.add(styles['new-form']);

    this.domNode.append(this.#title.domNode);

    this.#contentContainer.classList.add(styles['content-container']);

    this.domNode.append(this.#contentContainer);

    [
      this.#generalPrinciple,
      this.#inputFormatsDownload,
      this.#exampleStructure,
      this.#trailingNote,
      this.#multipleStructuresTip,
    ].forEach(ele => this.#contentContainer.append(ele.domNode));

    // append last (to place on top of everything else and ensure is clickable)
    this.domNode.append(this.#closeButton.domNode);
  }

  close(): void {
    this.domNode.remove();
  }

  /**
   * Undo any dragging that's been done on the form.
   */
  reposition(): void {
    this.#dragHandler.untranslate();
  }
}
