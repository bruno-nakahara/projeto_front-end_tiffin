import { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { useEvents } from '../../contexts/EventsContext';
import style from './eventForm.style';

const EventForm = ({ route, navigation }) => {
  const [event, setEvent] = useState(route.params ? route.params : {});
  const { createEvent, updateEvent } = useEvents();

  const handleSubmit = () => {
    if (event.editMode) {
      updateEvent(event);
    } else {
      createEvent(event);
    }
  };

  return (
    <View style={style.container}>
      <Text>Nome do Evento</Text>
      <TextInput
        style={style.inputStyle}
        onChangeText={name => setEvent({ ...event, name })}
        placeholder="Informe o nome do evento"
        value={event.name}
      />

      <Text>Descrição do Evento</Text>
      <TextInput
        style={style.inputStyle}
        onChangeText={description => setEvent({ ...event, description })}
        placeholder="Descrição do evento"
        value={event.description}
      />

      <Text>Categoria do Evento</Text>
      <TextInput
        style={style.inputStyle}
        onChangeText={category => setEvent({ ...event, category })}
        placeholder="Ex: música, programação"
        value={event.category}
      />

      <Text>Local do Evento</Text>
      <TextInput
        style={style.inputStyle}
        onChangeText={local => setEvent({ ...event, local })}
        placeholder="Ex: Rua N, 99, São João, Campinas"
        value={event.local}
      />

      <Text>Data do Evento</Text>
      <TextInput
        style={style.inputStyle}
        onChangeText={date => setEvent({ ...event, date })}
        placeholder="Ex: DD/MM/YYYY"
        value={event.date}
      />

      <Text>Preço do Evento</Text>
      <TextInput
        style={style.inputStyle}
        onChangeText={price => setEvent({ ...event, price })}
        placeholder="Ex: 200"
        value={event.price}
      />

      <Text>Imagem do Evento</Text>
      <TextInput
        style={style.inputStyle}
        onChangeText={imageUrl => setEvent({ ...event, imageUrl })}
        placeholder="URL da imagem"
        value={event.imageUrl}
      />

      <Button title="Salvar" color="#a29bfe" onPress={handleSubmit} />
    </View>
  );
};

export default EventForm;
