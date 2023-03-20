import Link from 'next/link'
import cardData from '../../data/cardDtat.json'

function Blogs_main() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='mb-5 mt-5'>
                <h1 className='border-bottom border-3 border-dark pb-5 pt-5'>Blogs</h1>
            </div>
        </div>
        <div className='row mb-5'>
        
        { cardData.map((value) =>{
        
        return <>
        <Link href={value.link} className='col-md-3' key={value.id} >
          
          <div className="card" style={{ width: "100%" }}>
            <img src={value.url} className="card-img-top" alt="..." />
            <div className="card-body">
              <div>
                <small>
                   <span>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{color: "#636363"}} width="16" height="20" fill="currentColor" className="bi bi-calendar3 pb-1" viewBox="0 0 16 16">
                      <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                      <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                   </span>
                   <span className='ms-1' style={{color: "#636363"}}>
                   {value.date}
                   </span>
                </small>
                <small className='ms-2'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{color: "#e4ba56" }} width="16" height="16" fill="currentColor" className="bi bi-tag" viewBox="0 0 16 16">
                      <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                      <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
                    </svg>
                   </span>
                   <span className='ms-1'>
                   <a href='#' style={{color: "#e4ba56" }} >{value.tag}</a>
                   </span>
                </small>
              </div>
              <h5 className="card-title fs-6 fw-bold" style={{color: "#222222"}}>{value.title}</h5>
              <p className="card-text"><small style={{color: "#636363"}}>{value.discription}</small></p>
              <a href="#" className=""><small style={{color: "#e4ba56" }}>Go somewhere</small></a>
              
            </div>
            <div className='border-top ps-3'>
              <small className=''>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{color: "gray"}} width="16" height="20" fill="currentColor" className="bi bi-person pb-1" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </span>
                <span className='ms-2' style={{color: "gray"}}>
                  by Aman Grover
                </span>
              </small>
            </div>
          </div>
        </Link>
        </>
        })}

         
        </div>
    </div>
  )
}

export default Blogs_main