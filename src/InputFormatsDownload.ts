import inputFormats from './input_formats.txt';

import * as styles from './Text.module.css';

import { Link } from './Link';

import { DownloadableFile } from '@rnacanvas/utilities';

export class InputFormatsDownload {
  readonly domNode = document.createElement('p');

  constructor() {
    this.domNode.classList.add(styles['text']);

    this.domNode.style.marginTop = '30px';

    let linkText = new Link('input formats');

    linkText.domNode.onclick = () => inputFormatsFile.download();

    this.domNode.append("Here's a list of supported ", linkText.domNode, '.');
  }
}

const inputFormatsFile = new DownloadableFile('input_formats.txt', inputFormats, { type: 'text/plain' });
