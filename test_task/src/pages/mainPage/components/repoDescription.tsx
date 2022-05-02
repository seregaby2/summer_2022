import React from 'react';

interface MyProps {
  title: string;
  description: string;
  url: string;
}
export function RepoDescription(props: MyProps) {
  return (
    <div className="wrapper-repo-description">
      <div className="title-repo">
        <a href={props.url} target="_blank" rel="noreferrer">
          {props.title}
        </a>
      </div>
      <div className="description-repo">
        {props.description ? props.description : 'Description not found'}
      </div>
    </div>
  );
}
