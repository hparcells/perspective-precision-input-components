import { ComponentRegistry } from '@inductiveautomation/perspective-client';

import { DebouncedTextFieldMeta } from './client-components/DebouncedTextField/DebouncedTextField';
import { DebouncedTextAreaMeta } from './client-components/DebouncedTextArea/DebouncedTextArea';

[DebouncedTextFieldMeta, DebouncedTextAreaMeta].forEach((c) => {
  ComponentRegistry.register(c);
});
