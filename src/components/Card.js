import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({repos}) => (
  <div className="card h-100">
    <div className="card-body">
      <h5 className="card-title">
        <Link
          to={`/repos/${repos.full_name}`}
          className="card-link text-dark"
        >{repos.name}</Link>
      </h5>

      <p className="card-text">
        stars: <span className="badge badge-secondary">{repos.stargazers_count.toLocaleString()}</span>
      </p>

      <a
        href={repos.html_url}
        className="btn btn-secondary btn-sm"
        target="_blank"
        rel="noreferrer"
      >Github</a>
    </div>
  </div>
);

export default Card;