import * as React from 'react';
import { ComponentProps } from '@inductiveautomation/perspective-client';

import { createComponentMeta } from '../../util/component';

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
  setTimestamp: (value: Date) => void;
}

export function DebouncedTextField(props: ComponentProps<DebouncedTextFieldProps>) {
  const {
    props: { text, debouncedText, placeholder, delay, disabled, setText, setDebouncedText, setPreviousValue, setTimestamp },
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
      setTimestamp(new Date());
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

export const DebouncedTextFieldMeta = createComponentMeta({
  type: COMPONENT_TYPE,
  component: DebouncedTextField,
  defaultSize: {
    width: 150,
    height: 36
  },
  propsReducer: (tree): DebouncedTextFieldProps => {
    return {
      text: tree.readString('text', ''),
      debouncedText: tree.readString('debouncedText', ''),
      placeholder: tree.readString('placeholder', ''),
      delay: tree.readNumber('delay', 300),
      disabled: tree.readBoolean('disabled', false),
      setText: (value) => {
        tree.write('text', value);
      },
      setDebouncedText: (value) => {
        tree.write('debouncedText', value);
      },
      setPreviousValue: (value) => {
        tree.write('previousValue', value);
      },
      setTimestamp: (value) => {
        tree.write('timestamp', value);
      }
    };
  }
});
