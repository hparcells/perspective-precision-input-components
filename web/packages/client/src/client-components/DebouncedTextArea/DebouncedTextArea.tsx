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
  debouncedText: string;
  placeholder: string;
  delay: number;
  disabled: boolean;
  setText: (value: string) => void;
  setDebouncedText: (value: string) => void;
  setPreviousValue: (value: string) => void;
  setTimestamp: (value: Date) => void;
}

export function DebouncedTextArea(props: ComponentProps<DebouncedTextAreaProps>) {
  const {
    props: { text, debouncedText, placeholder, delay, disabled, setText, setDebouncedText, setPreviousValue, setTimestamp },
    emit
  } = props;

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value;
    setText(value);
  }

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setPreviousValue(debouncedText);
      setDebouncedText(text);
      setTimestamp(new Date());
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
      debouncedText: tree.readString('debouncedText', ''),
      placeholder: tree.readString('placeholder', ''),
      delay: tree.readNumber('delay', 300),
      disabled: tree.readBoolean('disabled', false),
      setText: (value: string) => {
        tree.write('text', value);
      },
      setDebouncedText: (value: string) => {
        tree.write('debouncedText', value);
      },
      setPreviousValue: (value: string) => {
        tree.write('previousValue', value);
      },
      setTimestamp: (value: Date) => {
        tree.write('timestamp', value);
      }
    };
  }
}
