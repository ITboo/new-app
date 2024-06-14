import DetailedCard from '../../components/DetailedCard';
import Layout from '../../components/Layout';

const MainPage = () => {
  return (
    <Layout nickname={'Boo'} avatarUrl={''} id={'1'}>
      <div>
        <DetailedCard />
      </div>
    </Layout>
  );
};

export default MainPage;
