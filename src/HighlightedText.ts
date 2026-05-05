export class HighlightedText {
  readonly domNode = document.createElement('span');

  constructor(textContent: string) {
    this.domNode.textContent = textContent;

    this.domNode.style.color = 'cyan';
    this.domNode.style.fontWeight = '700';
  }
}
