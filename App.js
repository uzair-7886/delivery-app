import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Restaurant from './screens/Restaurant';
// import { store } from './app/store'
import { Provider } from 'react-redux'
import { store } from './store';
import Basket from './screens/Basket';
import Order from './screens/Order';
import Delivery from './screens/Delivery';
import Map from './screens/Map';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="Basket" component={Basket} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Delivery" component={Delivery} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>

  );
}


