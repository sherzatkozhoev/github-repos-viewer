import React from 'react';

const Contributors = ({contributors}) => (
  <div className="card mb-4">
    <div className="card-header">10 most active contributors</div>
    <div className="list-group list-group-flush">
      {contributors.map(contributor => (
        <a
          key={contributor.id}
          href={contributor.html_url}
          className="list-group-item list-group-item-action"
          target="_blank"
          rel="noreferrer"
        >{contributor.login}</a>
      ))}
    </div>
  </div>
);

export default Contributors;