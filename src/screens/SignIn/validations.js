
import { View, Text } from 'react-native';

export default function validations(userData) {

  const validations = [];

  validations.push(userData.email && userData.email.includes('@'));
  validations.push(userData.email && userData.email.includes('.'));
  validations.push(userData.password && userData.password.length >= 6);

  const result = validations.reduce(
    (acumulado, valorAtual) => acumulado && valorAtual);

  return result;
}
