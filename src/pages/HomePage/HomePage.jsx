import { MainTitle, Section, Text } from './HomePage.styled';

const HomePage = () => {
  return (
    <Section>
      <MainTitle>Welcome to our auto rent service!</MainTitle>
      <Text>Here you can find auto for any price and desires</Text>
      <img
        src="https://www.topgear.com/sites/default/files/2023/09/1%20Ferrari%20Roma%20Spider.jpg?w=1200"
        alt="cool auto"
      />
    </Section>
  );
};

export default HomePage;
