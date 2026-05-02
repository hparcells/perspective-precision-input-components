import * as React from 'react';
import {
  ComponentMeta,
  ComponentProps,
  PComponent,
  PropertyTree,
  SizeObject
} from '@inductiveautomation/perspective-client';

import './DebouncedTextArea.scss';

export const COMPONENT_TYPE = 'pic.debouncedtextarea';

export interface DebouncedTextAreaProps {
  text: string;
  placeholder: string;
  delay: number;
  disabled: boolean;
  rows: number;
  setText: (value: string) => void;
  setDebouncedText: (value: string) => void;
}

export function DebouncedTextArea(props: ComponentProps<DebouncedTextAreaProps>) {
  const {
    props: { text, placeholder, delay, disabled, rows, setText, setDebouncedText },
    emit
  } = props;

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value;
    setText(value);
  }

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(text);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [text]);

  return (
    <textarea
      {...emit({ classes: ['debounced-text-area'] })}
      value={text}
      placeholder={placeholder}
      onChange={handleChange}
      disabled={disabled}
      rows={rows}
    />
  );
}

export class DebouncedTextAreaMeta implements ComponentMeta {
  getComponentType(): string {
    return COMPONENT_TYPE;
  }

  getViewComponent(): PComponent {
    return DebouncedTextArea;
  }

  getDefaultSize(): SizeObject {
    return {
      width: 150,
      height: 80
    };
  }

  getPropsReducer(tree: PropertyTree): DebouncedTextAreaProps {
    return {
      text: tree.readString('text', ''),
      placeholder: tree.readString('placeholder', ''),
      delay: tree.readNumber('delay', 300),
      disabled: tree.readBoolean('disabled', false),
      rows: tree.readNumber('rows', 4),
      setText: (value: string) => {
        tree.write('text', value);
      },
      setDebouncedText: (value: string) => {
        tree.write('debouncedText', value);
      }
    };
  }
}
