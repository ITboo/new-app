import {
  getPhotosStarted,
  getPhotosSuccess,
  getPhotosFailed,
} from '../actionCreators/photos';
import { api } from '../../api';

export const getPhotos = () => {
  return async (dispatch) => {
    try {
      dispatch(getPhotosStarted);
      const response = api.photos.getPhotos({
        params: {
          _page: 0,
          _limit: 5,
        },
      });
      dispatch(getPhotosSuccess(response.data));
    } catch (error) {
      dispatch(getPhotosFailed(error));
    }
  };
};
