import React, { useState } from 'react';
import './styles.scss';
import { IntrinsicAttributes } from '../../shared/types';
export type SwitchOptionType = {
  label: string;
  value: any;
};
export type XSwitcheType = {
  options?: SwitchOptionType[];
  className?: string;
  optionClassName?: string;
  labelClassName?: string;
  labelSize?: string;
  optionLabel?: (val?: SwitchOptionType) => string;
  optionValue?: (val?: SwitchOptionType) => string;
  separator?: boolean;
  value: string;
  onChange?: (e?) => void;
} & IntrinsicAttributes;
const XSwitches = (props: XSwitcheType) => {
  const { options, optionClassName } = props;
  const [tab, updateTab] = useState<string>(props.value);
  return options?.map((e, index) => (
    <div
      key={index}
      className={`${optionClassName} x-switch__option w-max  `}
      onClick={() => {
        typeof props.onChange === 'function' && props.onChange(e.value);
        updateTab(e.value);
      }}
    >
      <p
        className={` ${props.labelClassName} x-switch__option__label text-${props.labelSize || 'md'} ${
          tab === e.value ? 'active' : ''
        }`}
      >
        {typeof props.optionLabel === 'function' ? props.optionLabel(e) : e.label}
      </p>
    </div>
  ));
};

export default React.memo(XSwitches);
