import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { AllExpensesScreen } from './Screens/AllExpensesScreen';
import { RecentExpensesScreen } from './Screens/RecentExpensesScreen';
import { ManageExpense } from './Screens/MangeExpense';

import { globalStyles } from './constants/styles';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesTabs () {
  return (
    <BottomTabs.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: globalStyles.colors.primary700 },
      headerTintColor: 'white',
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: globalStyles.colors.primary400,
      tabBarStyle: { backgroundColor: globalStyles.colors.primary700 },
      tabBarOptions: {
        style: {
          backgroundColor: 'red',
          paddingBottom: 30
        }
      }
    }}
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
            headerStyle: {backgroundColor: "#254343"},
            headerTintColor: "white",
            contentStyle: {backgroundColor: "red"}
          }}
        >
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesTabs}
            options={{
              headerShown: false,
              // title: "Expenses Overview",
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Manage Expenses"
            component={ManageExpense}
            options={{
              // title: "Manage Expenses",
              headerShown: false
            }}
          />
        </Stack.Navigator>
        {/* <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#254343' },
            headerTintColor: 'white',
            tabBarActiveTintColor: 'white',
            tabBarStyle: { backgroundColor: '#254343' },
            tabBarOprions: {
              style: {
                backgroundColor: 'red',
                paddingBottom: 30
              }
            }
          }}
        >
          <Tab.Screen
            name="Recent"
            component={RecentExpensesScreen}
            options={{
              tabBarIcon: ({color, size}) => <Ionicons name="time" color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name="All Expenses"
            component={AllExpensesScreen}
            options={{
              tabBarIcon: ({color, size}) => <Ionicons name="calendar" color={color} size={size} />,
            }}
          />
        </Tab.Navigator> */}
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
