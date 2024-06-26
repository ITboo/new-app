import { useEffect } from 'react';
import DetailedCard from '../../components/DetailedCard';
import Layout from '../../components/Layout';
import { useDispatch } from 'react-redux';
import { getPhotos } from '../../redux/actions/photos';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhotos());
  }, []);
  return (
    <Layout nickname={'Boo'} avatarUrl={''} id={'1'}>
      <div>
        <DetailedCard
          userName={'Boo'}
          avatarUrl={''}
          userId={'1'}
          imgUrl={
            'https://memepedia.ru/wp-content/uploads/2024/04/durov-v-ledjanoj-vode-768x512.jpg'
          }
          likes={30}
          isLikedByYou={true}
          comments={[
            {
              text: 'xd',
              nickname: 'aaaaqqrdq',
            },
            {
              text: 'lol',
              nickname: 'fqddq',
            },
            {
              text: 'asdfghjk',
              nickname: 'wwwqqq',
            },
            {
              text: 'svalja.m.vamv',
              nickname: 'eee',
            },
          ]}
        />
      </div>
    </Layout>
  );
};

export default MainPage;
