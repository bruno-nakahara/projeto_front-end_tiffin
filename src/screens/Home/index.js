import { View, FlatList } from 'react-native';
import EventCard from '../../components/Card';
import Header from '../../components/Header';
import { useEvents } from '../../contexts/EventsContext';
import styles from './home.style';

const Home = () => {
  const { events } = useEvents();

  return (
    <View style={styles.container}>
      <Header label="Home" />

      <FlatList
        data={events}
        renderItem={({ item }) => {
          return <EventCard item={item} />;
        }}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default Home;
