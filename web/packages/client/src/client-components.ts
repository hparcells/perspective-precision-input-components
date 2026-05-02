import { ComponentMeta, ComponentRegistry } from '@inductiveautomation/perspective-client';

import { DebouncedTextFieldMeta } from './client-components/DebouncedTextField/DebouncedTextField';
import { DebouncedTextAreaMeta } from './client-components/DebouncedTextArea/DebouncedTextArea';

const components: ComponentMeta[] = [new DebouncedTextFieldMeta(), new DebouncedTextAreaMeta()];

components.forEach((c: ComponentMeta) => {
  ComponentRegistry.register(c);
});
