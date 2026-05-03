import * as React from 'react';
import {
  ComponentMeta,
  ComponentProps,
  PComponent,
  PropertyTree,
  SizeObject
} from '@inductiveautomation/perspective-client';

import './DebouncedTextField.scss';

export const COMPONENT_TYPE = 'pic.debouncedtextfield';

export interface DebouncedTextFieldProps {
  text: string;
  debouncedText: string;
  placeholder: string;
  delay: number;
  disabled: boolean;
  setText: (value: string) => void;
  setDebouncedText: (value: string) => void;
  setPreviousValue: (value: string) => void;
}

export function DebouncedTextField(props: ComponentProps<DebouncedTextFieldProps>) {
  const {
    props: { text, debouncedText, placeholder, delay, disabled, setText, setDebouncedText, setPreviousValue },
    emit
  } = props;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setText(value);
  }

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setPreviousValue(debouncedText);
      setDebouncedText(text);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [text]);

  return (
    <input
      {...emit({ classes: ['debounced-text-field'] })}
      value={text}
      placeholder={placeholder}
      onChange={handleChange}
      disabled={disabled}
    />
  );
}

export class DebouncedTextFieldMeta implements ComponentMeta {
  getComponentType(): string {
    return COMPONENT_TYPE;
  }

  getViewComponent(): PComponent {
    return DebouncedTextField;
  }

  getDefaultSize(): SizeObject {
    return {
      width: 150,
      height: 36
    };
  }

  getPropsReducer(tree: PropertyTree): DebouncedTextFieldProps {
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
      }
    };
  }
}
