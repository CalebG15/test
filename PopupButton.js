import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

const PopupButton = ({ popupText, myColor }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonPress = () => {
    setIsVisible(true);
  };

  const handlePopupClose = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Tap Me" onPress={handleButtonPress} />
      {isVisible && (
        <View style={styles.popup}>
          <Text style={styles.popupText}>{popupText}</Text>
          <Button title="Close" onPress={handlePopupClose} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  popupText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default PopupButton;
