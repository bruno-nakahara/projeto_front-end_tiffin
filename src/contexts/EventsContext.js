import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axiosAPI from '../services/api';

const EventsContext = createContext({});

export function EventsProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [state, setState] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    getEvents();
  }, [state]);

  async function getEvents() {
    await axiosAPI
      .get(`/events`)
      .then(res => {
        if (res.status === 200) {
          setEvents(res.data);
        }
      })
      .catch(err => {
        console.warn('Erro ao tentar buscar evento!');
        console.error(err);
      });
  }

  async function createEvent(data) {
    const newData = {
      _id: data._id,
      name: data.name,
      price: data.price,
      description: data.description,
      category: data.category,
      date: data.date,
      imageUrl: data.imageUrl,
      local: data.local,
    };

    await axiosAPI
      .post('/events', newData)
      .then(res => {
        if (res.status === 201) {
          console.warn('Evento criado com sucesso!');
          navigation.goBack();
        }
      })
      .catch(err => {
        if (err.response.status === 400) {
          console.warn('Favor preencher todos os campos!');
        } else {
          console.warn('Erro ao tentar criar evento!');
          console.error(err);
        }
      });

    setState(!state);
  }

  async function deleteEvent(id) {
    await axiosAPI
      .delete(`/events/${id}`)
      .then(res => {
        if (res.status === 200) {
          console.warn('Evento deletado com sucesso!');
        }
      })
      .catch(err => {
        if (err.response.status === 404) {
          console.warn('Evento não encontrado!');
          console.error(err);
        } else {
          console.warn('Erro ao tentar deletar evento!');
          console.error(err);
        }
      });

    setState(!state);
  }

  async function updateEvent(data) {
    const newData = {
      _id: data._id,
      name: data.name,
      price: data.price,
      description: data.description,
      category: data.category,
      date: data.date,
      imageUrl: data.imageUrl,
      local: data.local,
    };

    await axiosAPI
      .put(`/events/${data._id}`, newData)
      .then(res => {
        if (res.status === 200) {
          console.warn('Evento atualizado com sucesso!');
          navigation.goBack();
        }
      })
      .catch(err => {
        if (err.response.status === 400) {
          console.warn('Favor preencher todos os campos!');
        } else if (err.response.status === 404) {
          console.warn('Evento não encontrado!');
          console.error(err);
          navigation.goBack();
        } else {
          console.warn('Erro ao tentar atualizar evento!');
          console.error(err);
          navigation.goBack();
        }
      });

    setState(!state);
  }

  async function searchEvents(filter) {
    await axiosAPI
      .get(`/events?filter=${filter}`)
      .then(res => {
        if (res.status === 200) {
          console.warn('Eventos buscados!');
          setEvents(res.data);
        }
      })
      .catch(err => {
        console.warn('Erro ao tentar buscar eventos!');
        console.error(err);
      });
  }

  return (
    <EventsContext.Provider
      value={{ events, createEvent, deleteEvent, updateEvent, searchEvents }}
    >
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventsContext);

  return context;
}
