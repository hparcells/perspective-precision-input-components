import * as React from 'react';
import {
  ComponentMeta,
  ComponentProps as PerspectiveComponentProps,
  PlainObject,
  PropertyTree,
  SizeObject
} from '@inductiveautomation/perspective-client';

export interface ComponentMetaConfig<P extends PlainObject> {
  type: string;
  component: React.ComponentType<PerspectiveComponentProps<P>>;
  defaultSize: SizeObject;
  propsReducer: (tree: PropertyTree) => P;
}

export function createComponentMeta<P extends PlainObject>(config: ComponentMetaConfig<P>): ComponentMeta {
  return {
    getComponentType: () => {
      return config.type;
    },
    getViewComponent: () => {
      return config.component;
    },
    getDefaultSize: () => {
      return config.defaultSize;
    },
    getPropsReducer: config.propsReducer
  } as ComponentMeta;
}
