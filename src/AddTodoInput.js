import React from 'react';
import { TextInput, TouchableOpacity, View, ImageBackground  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { bottomSpace, ITEM_WIDTH } from './util';

export default ({
  value,
  onChangeText,
  placeholder,
  onPressAdd,
  onSubmitEditing,
  onFocus,
}) => {
  return (
    <View style={{ 
    width: ITEM_WIDTH,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    padding:5,
    borderWidth: 1,
    borderColor: '#16A085',
    borderRadius: 20,
    }}>
    <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{
        flex: 1,
        padding: 5,
        color: "#595959",
        }}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={false}
        onFocus={onFocus}
    />
    <TouchableOpacity onPress={onPressAdd} style={{ padding: 5 }}>
        <AntDesign name="plus" size={18} color="#595959" />
    </TouchableOpacity>
    </View>
  );
};
