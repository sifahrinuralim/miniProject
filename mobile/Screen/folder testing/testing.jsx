import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

function coba() {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isHighlighted2, setIsHighlighted2] = useState(false);

  return (
    <View>
      <TextInput
        style={[styles.textInput, isHighlighted && styles.isHighlighted]}
        onFocus={() => setIsHighlighted(true)}
        onBlur={() => setIsHighlighted(false)}
      />

      <TextInput
        style={[styles.textInput, isHighlighted2 && styles.isHighlighted2]}
        onFocus={() => setIsHighlighted2(true)}
        onBlur={() => setIsHighlighted2(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'grey',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    height: 43,
  },
  isHighlighted: {
    backgroundColor: 'red',
  },
  isHighlighted2: {
    backgroundColor: 'red',
  },
});

export default coba;
