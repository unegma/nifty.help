import React, {useCallback, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import { data } from "../data/pageTextWhy";
import PageText from '../components/PageText';

export default function PageOne(): JSX.Element {
  const [page, setPage] = useState(1);

  const pages = 10;
  const limit = 1;
  const onPageChanged = useCallback(
    (event, page) => {
      event.preventDefault();
      setPage(page);
      console.log(page)
    },
    []
  );

  // https://codesandbox.io/s/react-pagination-with-hooks-2i1hx?file=/src/CommentWithPagination.js:471-581
  const currentComments = data.slice(
    (page - 1) * limit,
    (page - 1) * limit + limit
  );

  return (
    <section className="container">
      <div>
        <Container maxWidth="sm">
          {/*pageNeighbours={1}*/}
          <PageText pageText={currentComments}/>
          <Pagination count={pages}
                      page={page}
                      color="primary"
                      onChange={onPageChanged}
          />
        </Container>
      </div>
    </section>
  );
}
