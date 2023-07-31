import React from 'react';
import {Card, ImageListItem, Typography} from "@mui/material";
import './LaunchesPage.css'
import {Link} from "react-router-dom";
import {Launch} from "../../../api/Launches/types";

interface PostsListProps {
  launches?: Launch[]
}
const LaunchesList = (props: PostsListProps) => {

  const {launches} = props;

  return (

      <div className='post-card-wrapper'>
        {launches?.map((launch) => (
          <Link
            to={`/launch/${launch.id}`}
            key={launch.id}
          >
            <div className='post-card'>
              <div className='card-content'>
                <Card
                  variant='outlined'
                  sx={{
                    fontFamily: 'Oxygen, sans-serif',
                    minWidth: '250px',
                    minHeight: '280px',
                    backgroundColor: 'black',
                    border: '1px solid white',
                    margin: '5px 5px',
                    padding: '20px',
                    ":hover":{
                      border: '1px solid deeppink',
                    }
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Mexcellent, serif',
                      backgroundColor: 'black',
                      color: 'deeppink',
                      fontSize: 25
                    }}>
                    {launch.name}
                  </Typography>
                  {launch.links.patch.small ? <img className='patchImg' src={launch.links.patch.small} alt='patch'/>
                    : <img className='patchImg' src='https://i.imgur.com/skwqiao.png'/>}
                </Card>
              </div>
            </div>
          </Link>
        ))}
      </div>
  );
};

export default LaunchesList;
