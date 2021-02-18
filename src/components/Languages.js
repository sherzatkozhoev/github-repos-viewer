import React from 'react';

const Languages = ({languages}) => (
  <p>
    <span className="mr-1">Languages:</span>
    {Object.keys(languages).map((lang, index) => (
      <span
        key={index + lang}
        className="badge badge-pill badge-secondary mr-2"
      >{lang}</span>
    ))}
  </p>
);

export default Languages;