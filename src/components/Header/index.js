import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import style from './header.style';
import { useEvents } from '../../contexts/EventsContext';

const Header = () => {
  const [filter, setFilter] = useState('');
  const { searchEvents } = useEvents();

  function handleSubmitSearch() {
    searchEvents(filter);
  }

  function handleRefresh() {
    searchEvents('');
    setFilter('');
  }

  return (
    <View style={style.container}>
      <TextInput
        style={style.filterStyle}
        onChangeText={search => setFilter(search)}
        placeholder="Pesquisar"
        value={filter}
      />
      <Button
        icon={<Icon name="search" color="white" size={25} />}
        buttonStyle={{
          backgroundColor: 'transparent',
        }}
        onPress={handleSubmitSearch}
      />
      <Button
        icon={<Icon name="close" color="white" size={25} />}
        buttonStyle={{
          backgroundColor: 'transparent',
        }}
        onPress={handleRefresh}
      />
    </View>
  );
};

export default Header;
