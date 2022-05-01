import React from 'react';

interface MyProps {
  classNameWrapper: string;
  classNameIcon: string;
  className: string;
  type: string;
  value: string;
  placeholder: string;
  onChange(e: React.FormEvent<HTMLInputElement>): void;
  onKeyDown(e: React.KeyboardEvent): void;
}

export function Input(props: MyProps) {
  return (
    <div className={props.classNameWrapper}>
      <span className={props.classNameIcon}></span>
      <input
        className={props.className}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
}
