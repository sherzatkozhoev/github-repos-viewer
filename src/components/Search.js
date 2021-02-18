import React, {useState, useEffect, useContext} from 'react';
import GithubContext from '../context/github/GithubContext';

const Search = () => {
  const localValue = localStorage.getItem('search-query') ?? '';
  const [value, setValue] = useState(localValue);
  const github = useContext(GithubContext);

  const onSubmit = e => {
    e.preventDefault();
    localStorage.setItem('search-query', value.trim());
    github.clearRepositories();
    github.search(value.trim());
  }

  useEffect(() => {
    if (!github.repositories.length) {
      github.search(localValue);
    }
    // eslint-disable-next-line
  }, [])

  return (
    <form className="form-group mb-4" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Search repos..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

export default Search;