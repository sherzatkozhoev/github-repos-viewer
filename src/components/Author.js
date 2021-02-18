import React from 'react';

const Author = ({author}) => (
  <div className="card mb-4">
    <div className="card-header">Author</div>
    <div className="row no-gutters">
      <div className="col-4 col-md-2 p-2">
        <img src={author.avatar_url} className="card-img rounded-0" alt={author.login} />
      </div>

      <div className="col-8 col-md-10">
        <div className="card-body">
          <h5 className="card-title">{author.login}</h5>
          <a
            href={author.html_url}
            className="btn btn-secondary btn-sm"
            target="_blank"
            rel="noreferrer"
          >Github</a>
        </div>
      </div>
    </div>
  </div>
);

export default Author;