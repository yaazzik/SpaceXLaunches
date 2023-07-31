import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Typography} from "@mui/material";
import './LaunchDetailsPage.css'
import {getLaunchById} from "../../../api/Launches/getLaunchById";
import {Launch} from "../../../api/Launches/types";
import {Rocket} from "../../../api/Rocket/types";
import {getRocketById} from "../../../api/Rocket/getRocketById";

const LaunchDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [launch, setLaunch] = useState<Launch>();
  const [rocket, setRocket] = useState<Rocket>();

  useEffect(() => {
    getLaunchById(id!)
      .then
      ((launchData) => {
        setLaunch(launchData);
        getRocketById(launchData?.rocket)
          .then(res => setRocket(res))
      })
  }, []);

  return (
    <div className='post-wrapper'>
      <Typography variant='h1'>
        {launch?.name}
      </Typography>
      <Typography variant='h6' sx={{
        display: 'flex'
      }}>
        {launch?.date_local}
        <div className='comment-email'>
          {rocket?.name}
        </div>
      </Typography>
      <Typography variant='h4'>
        {launch?.details}
      </Typography>
      <img className='rocket-img' src={rocket?.flickr_images[0]}/>
      <Typography variant='h4'>
        {rocket?.description}
      </Typography>
    </div>
  );
};

export default LaunchDetailsPage;
