import React, { useEffect, useState } from 'react'
import tgtdAPI, { tgtdCategory } from '~/utils/tgtdAPI'

function ListProduct() {
    useEffect(() => {
      const getData = async () => {
        const category = tgtdCategory.dtdd;
        const params = {
            brand:"brand 1"
        }
        const response = await tgtdAPI.getProductsList(category, params);
        console.log(response);
      }
    
      getData();
    }, [])
    

  return (
    <div>ListProduct</div>
  )
}

export default ListProduct