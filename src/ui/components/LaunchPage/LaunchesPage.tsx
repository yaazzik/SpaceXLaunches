import React, {Suspense, useCallback, useEffect, useState} from 'react';
import LaunchesList from "./LaunchesList";
import './LaunchesPage.css'
import {Launch} from "../../../api/Launches/types";
import {getLaunches} from "../../../api/Launches/getLaunches";

const LaunchesPage = () => {

  const [launches, setLaunches] = useState<Launch[] | undefined>();
  const [sortText, setSortText] = useState(false)

  const handleClick = () => {
    setSortText(prevState => !prevState);
    setLaunches(launches?.reverse())
  }

  useEffect(() => {
    getLaunches().then(
      res => setLaunches(res?.reverse())
    )
  },[setLaunches])


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div onClick={handleClick} className='user-select'>
        {sortText ? 'Date ↑'
          : 'Date ↓'
        }
      </div>
      <LaunchesList launches={launches} />
    </Suspense>
  );
};

export default LaunchesPage;
