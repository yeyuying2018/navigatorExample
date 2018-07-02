import {StackNavigator} from "react-navigation"
import HomePage from '../pages/homePage';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import React from 'react';
import {Button} from 'react-native';
export const AppStackNavigator = StackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page1: {
        screen: Page1,
        navigationOptions:({navigation})=>({
            title: `${navigation.state.params.name}页面名`,
        })
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            title: 'Page2'
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {
            //
            //{"navigation":
            //    {"state":
            //        {"params":
            //            {"title":"Devio"},
            //            "routeName":"Page3",
            //            "key":"id-1530501050905-1"},
            //        "actions":{}
            //    },
            //    "screenProps":{},
            //    "navigationOptions":{}
            //}
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                title: params.title ? params.title : 'THIS IS Page3',
                headerRight: (
                    <Button
                        title={params.mode === 'edit'? '保存': '编辑'}
                        onPress={()=>{
                            setParams({mode: params.mode==='edit' ? '' : 'edit'})

                        }}
                        />
                )

            }
        }
    }
},{
    navigationOptions: {
        //header: null
    }
})