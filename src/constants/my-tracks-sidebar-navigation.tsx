import React from 'react';
import {
  FavouriteIcon,
  RecentHistoryIcon,
  DownloadItemsIcon,
  LocalFilesIcon,
} from '../assets/icons';

export default {
  Favourite: {
    icon: <FavouriteIcon />,
    link: '/favourite',
  },
  Recent_History: {
    icon: <RecentHistoryIcon />,
    link: '/recent_history',
  },
  Download_Items: {
    icon: <DownloadItemsIcon />,
    link: '/download_items',
  },
  Local_Files: {
    icon: <LocalFilesIcon />,
    link: '/local_files',
  },
} as const;
