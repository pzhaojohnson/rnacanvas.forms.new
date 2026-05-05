/**
 * @jest-environment jsdom
 */

import { NewForm } from './NewForm';

describe('`class NewForm`', () => {
  it('renders', () => {
    var form = new NewForm();

    expect(() => document.body.append(form.domNode)).not.toThrow();
  });
});
