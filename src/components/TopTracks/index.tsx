import React from 'react';
import { motion } from 'framer-motion';
import TopTracksMock from '../../mocks/TopTracksMock';

import {
  FavouriteIcon,
  DownloadIcon,
  ShareTrackIcon,
  Dots,
} from '../../assets/icons';
import { Container, Table } from './styles';
import { TOP_TRACKS_ANIMATION, TOP_TRACKS_ITEM_ANIMATION } from './animation';

export function TopTracks() {
  return (
    <Container>
      <h1>Top Tracks</h1>
      <Table variants={TOP_TRACKS_ANIMATION} initial="hidden" animate="show">
        <thead>
          <tr>
            <th>#</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Daily Plays</th>
            <th>Time</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {TopTracksMock.map((track, index) => (
            <motion.tr
              variants={TOP_TRACKS_ITEM_ANIMATION}
              className={index === 1 ? 'active' : ''}
              key={track.id}
            >
              <td>
                {index + 1} <FavouriteIcon />
              </td>
              <td>{track.title}</td>
              <td>{track.artist}</td>
              <td>{track.daily_plays}</td>
              <td>{track.time}</td>
              <td>
                <DownloadIcon /> <ShareTrackIcon /> <Dots />
              </td>
            </motion.tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
