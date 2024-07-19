import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Principal from "./Principal";
import Consultas from "./Consultas";
import Explorar from "./Explorar";
import Perfil from "./Perfil";

import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarStyle: {
        backgroundColor: "#002851"
    },
    tabBarActiveTintColor: "#339CFF",
    tabBarInactiveTintColor: "#FFF"
};

const tabs = [
    {
        name: 'Principal',
        component: Principal,
        icon: 'home'
    },
    {
        name: 'Consultas',
        component: Consultas,
        icon: 'calendar'
    },
    {
        name: 'Explorar',
        component: Explorar,
        icon: 'search'
    },
    {
        name: 'Perfil',
        component: Perfil,
        icon: 'person'
    },
];

export default function Tabs(){
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            {/* <Tab.Screen name="Principal" component={Principal} options={{headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />)}} />
            <Tab.Screen name="Consultas" component={Consultas} options={{headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="calendar" color={color} size={size} />)}} />
            <Tab.Screen name="Explorar" component={Explorar} options={{headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="search" color={color} size={size} />)}} />
            <Tab.Screen name="Perfil" component={Perfil} options={{headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="person" color={color} size={size} />)}} /> */}

            {tabs.map((tab) => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    component={tab.component}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (<Ionicons name={tab.icon} color={color} size={size} />)
                    }}
                />
            ))}
        </Tab.Navigator>
    );
}