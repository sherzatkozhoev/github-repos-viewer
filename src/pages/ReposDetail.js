import React, {useContext, useEffect} from 'react';
import GithubContext from '../context/github/GithubContext';
import Author from '../components/Author';
import Contributors from '../components/Contributors';
import Languages from '../components/Languages';
import Loader from "../components/Loader";

function formatDate(date) {
  date = new Date(date);

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  day = day.toString().length > 1 ? day : '0' + day;
  month = month.toString().length > 1 ? month : '0' + month;

  return `${year}-${month}-${day}`;
}

function ReposDetail({match}) {
  const {getReposDetail, repos, commits, languages, contributors, loading} = useContext(GithubContext);
  const fullName = `${match.params.owner}/${match.params.repo}`;

  useEffect(() => {
    getReposDetail(fullName);
    // eslint-disable-next-line
  }, []);

  if (loading || Object.keys(repos).length === 0) {
    return <Loader />
  }

  const lastCommitDate = commits.length ? formatDate(commits[0].commit.author.date) : null;

  return (
    <>
      <h1 className="mb-4">{repos.name}</h1>

      <p>{repos.description}</p>

      <p>
        <span className="mr-1">Stars:</span>
        <span className="badge badge-secondary">{repos.stargazers_count.toLocaleString()}</span>
      </p>

      <Languages languages={languages} />

      <p>
        <span className="mr-1">Last commit date:</span>
        <span className="badge badge-pill badge-secondary">{lastCommitDate}</span>
      </p>

      <Author author={repos.owner} />

      <Contributors contributors={contributors} />
    </>
  )
}

export default ReposDetail;
