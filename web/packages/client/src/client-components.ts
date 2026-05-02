import { ComponentMeta, ComponentRegistry } from '@inductiveautomation/perspective-client';

import { DebouncedTextFieldMeta } from './client-components/DebouncedTextField/DebouncedTextField';

const components: ComponentMeta[] = [new DebouncedTextFieldMeta()];

components.forEach((c: ComponentMeta) => {
  ComponentRegistry.register(c);
});
