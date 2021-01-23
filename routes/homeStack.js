import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/Home'
import Level from '../screens/Level'
import GameEasy from "../screens/GameEasy"
import GameMidle from '../screens/GameMidle'
import GameHard from  '../screens/GameHard'
import Mad from '../screens/Mad'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: () => ({
            headerTransparent: true,
            headerTintColor: true
        }),
    },
    Level: {
        screen: Level,
        navigationOptions: () => ({
            headerTransparent: true,
        }),
    },
    GameEasy: {
        screen: GameEasy,
        navigationOptions: () => ({
            headerTransparent: true,
        }),
    },
    GameMidle: {
        screen: GameMidle,
        navigationOptions: () => ({
            headerTransparent: true,
        }),
    },
    GameHard: {
        screen: GameHard,
        navigationOptions: () => ({
            headerTransparent: true,
        }),
    },
    Mad: {
        screen: Mad,
        navigationOptions: () => ({
            headerTransparent: true,
        }),
    },
};

const  HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);