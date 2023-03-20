import React, { useEffect, useState } from 'react'
import Compare_Section1 from './Compare_Section1'
import Compare_Section2 from './Compare_Section2'
import useCompareStore from 'store/compareStore'

function Compare_main() {
  const comapreState = useCompareStore(state => state.comapreState)


  return (
    <div>

      <Compare_Section1 />
      <div>
        {comapreState?.length > 0?(<>
          <Compare_Section2 comapreState={comapreState} />
        </>) : (<>
          <div className='w-100 d-flex justify-content-center align-content-center align-items-center'>
                Add Proprty to Compare
          </div>
        </>)}

      </div>
    </div>
  )
}

export default Compare_main