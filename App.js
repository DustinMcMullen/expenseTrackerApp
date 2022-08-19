import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { AllExpensesScreen } from './Screens/AllExpensesScreen';
import { RecentExpensesScreen } from './Screens/RecentExpensesScreen';
import { ManageExpense } from './Screens/MangeExpense';
import { IconButton } from './components/UI/IconButton';

import { globalStyles } from './constants/styles';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesTabs () {
  return (
    <BottomTabs.Navigator
    screenOptions={ ({navigation}) => ({
      headerStyle: { backgroundColor: globalStyles.colors.primary700 },
      tabBarStyle: { backgroundColor: globalStyles.colors.primary700 },
      headerTintColor: 'white',
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: globalStyles.colors.primary400,
      headerRight: ({tintColor}) => (
        <IconButton
          iconName="add"
          size={24}
          color={tintColor}
          onPress={ () => navigation.navigate("ManageExpense") }
        />
      )
    }) }
  >
    <BottomTabs.Screen
      name="RecentExpenses"
      component={RecentExpensesScreen}
      options={{
        title: "Recent Expenses",
        tabBarLabel: "Recent",
        tabBarIcon: ({color, size}) => <Ionicons name="time" color={color} size={size} />,
      }}
    />
    <BottomTabs.Screen
      name="AllExpenses"
      component={AllExpensesScreen}
      options={{
        title: "All Expenses",
        tabBarLabel: "All Expenses",
        tabBarIcon: ({color, size}) => <Ionicons name="infinite" color={color} size={size} />,
      }}
    />
  </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: globalStyles.colors.primary700 },
            headerTintColor: "white"
          }}
        >
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              title: "Manage Expense",
              presentation: "modal"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
