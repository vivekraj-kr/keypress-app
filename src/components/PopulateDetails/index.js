import React, { useContext } from 'react';
import { DetailsContext } from '../../App';

const PopulateDetails = ({ className }) => {
  const shortCutsInfo = useContext(DetailsContext);
  return (<div className={className}> {shortCutsInfo.map(({ combo, description }, index) => {
    return <div key={index}>
      {combo} - {description}
    </div>
  })}</div>)
}

export default PopulateDetails;