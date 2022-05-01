import React from 'react';

interface MyProps {
  classNameWrapper: string;
  classNameIcon: string;
  classNameText: string;
  text: string;
}

export function InitialView(props: MyProps) {
  return (
    <div className={props.classNameWrapper}>
      <div className={props.classNameIcon}></div>
      <div className={props.classNameText}>{props.text}</div>
    </div>
  );
}
