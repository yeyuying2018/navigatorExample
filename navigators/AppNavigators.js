
import {StackNavigator} from "react-navigation"
import HomePage from '../pages/homePage';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

export const AppStackNavigator = StackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page1: {
        screen: Page1,
        navigationOptions:({navigation})=>({
            title: `${navigation.state.params.name}页面名`
        })
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            title: 'Page2'
        }
    }
},{
    navigationOptions: {
        //header: null
    }
})