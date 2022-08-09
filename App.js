import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';

import IdentificationDetails from './src/components/IdentificationDetails';
import ContactDetails from './src/components/ContactDetails';
import Dashboard from './src/components/Dashboard';
import EmployeeDetails from './src/components/EmployeeDetails';
import LoanFunding1 from './src/components/LoanFunding1';
import DesignYourLoan from './src/components/DesignYourLoan';
import QuickRelief from './src/components/QuickRelief';
import FlexibleLifeline from './src/components/FlexibleLifeline';
import MonthlyBudget from './src/components/MonthlyBudget';
import LoanSummary from './src/components/LoanSummary';
import ApplicationLoading from './src/components/ApplicationLoading';
import Onboard from './src/components/Onboard';
import GetStarted from './src/components/GetStarted';
import Login from './src/components/Login';

const Stack = createStackNavigator();

const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTintColor: 'grey',
          headerStyle: { backgroundColor: 'white' },
          headerTitleStyle: {
            textAlign: 'right'
          }
        }}
      >
        <Stack.Screen
          name="Onboard"
          component={Onboard}
          options={{
            title: null,
            headerShown: false
          }}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={({ navigation }) => ({
            title: null,
            
            headerRight: () => (
              <Text
                style={styles.headerText}
                onPress={() => navigation.navigate('Login')}
              >
                Log In
              </Text>
            )
          })}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
            title: null,
            
            headerRight: () => (
              <Text
                style={styles.headerText}
                onPress={() => navigation.navigate('GetStarted')}
              >
                Sign Up
              </Text>
            )
          })}
        />
        <Stack.Screen
          name="IdentificationDetails"
          component={IdentificationDetails}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>Step 1 of 8</Text>
            )
          }}
        />
        <Stack.Screen
          name="ContactDetails"
          component={ContactDetails}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>Step 2 of 8</Text>
            )
          }}
        />
        <Stack.Screen
          name="EmployeeDetails"
          component={EmployeeDetails}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>Step 3 of 8</Text>
            )
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'DashBoard'
          }}
        />

        <Stack.Screen
          name="LoanFunding1"
          component={LoanFunding1}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>Step 4 of 8</Text>
            )
          }}
        />
        <Stack.Screen
          name="DesignYourLoan"
          component={DesignYourLoan}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>Step 5 of 8</Text>
            )
          }}
        />
        <Stack.Screen
          name="QuickRelief"
          component={QuickRelief}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>Step 6 of 8</Text>
            )
          }}
        />
        <Stack.Screen
          name="FlexibleLifeline"
          component={FlexibleLifeline}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>Step 6 of 8</Text>
            )
          }}
        />
        <Stack.Screen
          name="MonthlyBudget"
          component={MonthlyBudget}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>Step 6 of 8</Text>
            )
          }}
        />
        <Stack.Screen
          name="LoanSummary"
          component={LoanSummary}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>Step 7 of 8</Text>
            )
          }}
        />
        <Stack.Screen
          name="ApplicationLoading"
          component={ApplicationLoading}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>Step 8 of 8</Text>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    backgroundColor: 'white',
    color: 'grey',
    fontSize: 16,
    padding: 15
  }
});
