import React, {useContext} from 'react';
import ReactPaginate from 'react-paginate';
import Search from '../components/Search';
import Card from '../components/Card';
import Loader from '../components/Loader';
import GithubContext from '../context/github/GithubContext';

function Home() {
  const {repositories, loading, pageCount, handlePageClick} = useContext(GithubContext);
  const searchQuery = localStorage.getItem('search-query');

  return (
    <>
      <h1 className="mb-4">Home</h1>

      <Search />

      <div className="row">
        {loading
          ? <div className="col-sm-12"><Loader /></div>
          : repositories.map(repos => (
            <div key={repos.id} className="col-sm-4 mb-4">
              <Card repos={repos} />
            </div>
          ))
        }
      </div>

      {searchQuery && (
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          containerClassName={'pagination justify-content-center mt-2'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          activeClassName={'active'}
          disabledClassName={'disabled'}
          previousLabel={<span aria-hidden="true">&laquo;</span>}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextLabel={<span aria-hidden="true">&raquo;</span>}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item disabled'}
          breakLinkClassName={'page-link'}
          onPageChange={handlePageClick}
        />
      )}
    </>
  )
}

export default Home;
