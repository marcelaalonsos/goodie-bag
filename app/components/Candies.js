import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {useParams} from 'react-router-dom';
import { fetchCandies } from './candySlice';

const Candies = () => {
  const candies = useSelector(state => state.candies.candies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCandies());
  },[])

  return (
    <div>
      <ul className='candies'>
        {candies.map(candy => candy={candy})}
      </ul>
    </div>
  )
}

export default Candies;
