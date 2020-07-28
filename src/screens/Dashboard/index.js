import React from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../contexts/auth';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{user?.firstName}</Text>
      <TouchableOpacity delayPressIn={0}
        style={{ width: 100, height: 100, backgroundColor: "#ddd" }}
        onPress={() => { }} />
      <Button title="Sair" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
