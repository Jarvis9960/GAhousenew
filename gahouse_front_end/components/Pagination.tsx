import React from "react"
import { useEffect, useState } from "react"
import { Icon } from '@iconify/react';
function Pagination({ data, page, setpage, numberOfRow, isLoading, isFetching, isPreviousData, children }) {
  const [queue, setqueue] = useState<any[]>([page])
  useEffect(() => {
    if (data?.total) {
      let q: any[] = []
      const totalPagesRoundOff = Math.round(data?.total / numberOfRow)
      const totalPages = data?.total / numberOfRow
      const start = page <= 5 ? 1 : page - 5
      const end = page <= 5 ? 10 : page + 5
      if (totalPages > end) {
        for (let i = start; i <= end; i++) {
          if (q.length <= 10 && i > 0) {
            q.push(i)
          } else {
            break
          }
        }
      } else {
        for (let i = start; i <= totalPages; i++) {
          if (q.length <= 10 && i > 0) {
            q.push(i)
          } else {
            break
          }
        }
      }
      setqueue(q)

    }
    return () => {
    }
  }, [page, data])


  return (
    <>

      {children}
      { (data?.previous > 0 || data?.next )? (<>
        <nav className="pt-4">
          <div className="pagination rounded-active justify-content-center mb-0">

            {data?.previous > 0 && (<>
              <div className="page-item"><i
                className="far fa-angle-double-right" onClick={() => { (!isPreviousData && data?.previous) && setpage(page => page - 1) }}>
                <Icon icon="material-symbols:arrow-left-sharp" color="#e4ba56" width={30} />
              </i>
              </div>
            </>)}

            {queue.map((pn, i) => (<>
              {pn == page ? (<>
                <div key={i} className="page-item active"><a className="page-link" href="#">{page}</a></div>
              </>) : (<>
                <div key={i} onClick={() => setpage(pn)} className="page-item d-none d-sm-block"><a className="page-link" href="#">  {pn}</a></div>
              </>)}
            </>))}

            {data?.next !=0 && data?.next && (<>
              <div className="page-item"><a className="page-link" href="#"><i
                className="far fa-angle-double-right" onClick={() => { (!isPreviousData && data?.next) && setpage(page => page + 1) }}>
                <Icon icon="material-symbols:arrow-right-sharp" color="#e4ba56" width={30} />
              </i>
              </a>
              </div>
            </>)}

          </div>
        </nav>

      </>) : ""}

    </>
  );
}

export default Pagination;