import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput, Checkbox } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const GetStarted = (props) => {
  const [email, setEmail] = React.useState('');
    const [checked, setChecked] = React.useState(false);
   const onSubmit = () => {
        props.navigation.navigate('Dashboard')
    }
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Let’s Get started by Creating your Profile
        </Text>
        <Text style={{ paddingVertical: 15, fontSize: 15 }}>
          Get quality trading signals by ceritfied experts and proffesionals
        </Text>
        <TextInput
          label="Employee Code"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.inputStyle}
          underlineColor="transparent"
          activeUnderlineColor="#047E40"
          right={<TextInput.Icon name="information" />}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 20
          }}
        >
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={{ paddingRight: 25 }}>
            I agree to The Terms of Service and Privacy Policy
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end'
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#047E40',
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'center'
                  }}
                  onPress={()=>onSubmit()}
        >
          <Text style={{ color: '#fff', padding: 10, fontSize: 15 }}>
            Get Started Now
          </Text>
          <AntDesign name="arrowright" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ padding: 20, textAlign: 'center' }}>
          Need Help? <Text style={{ color: '#004ADA' }}>Contact Support</Text>
        </Text>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  inputStyle: {
    borderRadius: 10,

    backgroundColor: '#EEEFF2',
    //
    marginBottom: 10,
    fontSize: 14,
    //fontWeight: 'bold',
    paddingHorizontal: 10,
    borderWidth: 0
  }
});
