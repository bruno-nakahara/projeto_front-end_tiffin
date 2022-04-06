import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { EventsProvider } from './src/contexts/EventsContext';
import Home from './src/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventForm from './src/screens/eventForm';
import { Button, Icon } from '@rneui/themed';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerStyle: {
    backgroundColor: '#a29bfe',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <EventsProvider>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => {
              return {
                title: 'Lista de eventos',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('EventForm')}
                    type="clear"
                    icon={<Icon name="add" size={25} color="#04d361" />}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="EventForm"
            component={EventForm}
            options={{ title: 'Formulário de evento' }}
          />
        </Stack.Navigator>
      </EventsProvider>
    </NavigationContainer>
  );
}
