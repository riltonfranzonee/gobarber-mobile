import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import { signUpRequest } from '~/store/modules/auth/actions';
import {translate} from '~/locales';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder={translate('full_name')}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder={translate('your_email')}
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder={translate('your_password')}
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
          {translate('create_an_account')}
          </SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>{translate('already_have_an_account')}</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
