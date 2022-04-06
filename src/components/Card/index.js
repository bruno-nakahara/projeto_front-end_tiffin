import { View, Text, Image } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import IconLabel from '../IconLabel';
import styles from './card.style';
import { useEvents } from '../../contexts/EventsContext';

const EventCard = ({ item }) => {
  const navigation = useNavigation();
  const { deleteEvent } = useEvents();

  const { name, category, description, price, imageUrl, date, local, _id } =
    item;
  const iconColor = '#5c50e6';

  function handleDelete() {
    deleteEvent(_id);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: imageUrl,
        }}
      />

      <View style={styles.infoStyle}>
        <View style={styles.infoContainerStyle}>
          <View>
            <Text style={styles.titleStyle}>{name}</Text>
            <Text style={styles.categoryStyle}>{category}</Text>
          </View>
          <View style={styles.buttonsContainerStyle}>
            <Button
              icon={<Icon name="edit" color={iconColor} size={25} />}
              buttonStyle={{
                backgroundColor: 'transparent',
              }}
              onPress={() =>
                navigation.navigate('EventForm', {
                  ...item,
                  editMode: true,
                })
              }
            />
            <Button
              icon={<Icon name="delete" color="red" size={25} />}
              buttonStyle={{
                backgroundColor: 'transparent',
              }}
              onPress={handleDelete}
            />
          </View>
        </View>
        <Text style={styles.descriptionStyle}>{description}</Text>
      </View>

      <View style={styles.iconLabelStyle}>
        <IconLabel name="calendar-outline" label={date} color={iconColor} />
        <IconLabel name="location-outline" label={local} color={iconColor} />
        <Text>
          <IconLabel name="pricetags-outline" color={iconColor} />
          {` R$ ${price}`}
        </Text>
      </View>
    </View>
  );
};

export default EventCard;
