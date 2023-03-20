import Link from 'next/link'
import React from 'react'

function Compare_Section1() {
  return (
    <div>
      <section className="pb-8 page-title shadow">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb pt-6 pt-lg-2 lh-15 pb-5">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Compare</li>
            </ol>
            <h1 className="fs-30 lh-1 mb-0 text-heading font-weight-600">Compare</h1>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default Compare_Section1