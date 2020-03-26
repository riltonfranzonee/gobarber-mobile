import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';
import api from '~/services/api';

import { Container, Title, List } from './styles';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';
import { translate } from '~/locales';

function Dashboard({ isFocused }) {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const response = await api.get('appointments');
    setAppointments(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
            ...appointment,
            canceled_at: response.data.canceled_at,
          }
          : appointment
      )
    );
  }
  return (
    <Background>
      <Container>
        <Title>{translate('schedules')}</Title>
        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment data={item} onCancel={() => handleCancel(item.id)} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: translate('schedules'),
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);

Dashboard.propTypes = {
  isFocused: PropTypes.bool,
};

Dashboard.defaultProps = {
  isFocused: PropTypes.bool,
};
