import { createAppContainer, DrawerItems, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../Components/Login/login'
import Signup from '../Components/Signup/signup'
import Dashboard from '../Components/Screen/dashboard'
import MovieDetail from "../Components/Screen/movieDetails";


const AuthStack = createStackNavigator({

    UserLogin: {
        screen: Login,
        headerMode: 'none',
        navigationOptions: {
            header: null,
        }
    },

    UserSignUp: {
        screen: Signup,
       
        navigationOptions: () => ({
            headerBackTitle: null,
            header: null,
        }),
    },

})



const AppStack = createStackNavigator({

    Dashboard: {
        screen: Dashboard,
        headerMode: 'none',
        navigationOptions: {
            header: null,
        }
    },
    MovieDetail: {
        screen: MovieDetail,
        headerMode: 'none',
        navigationOptions: {
            header: null,
        }
    },

  

})

const SwitchNavigator = createSwitchNavigator({
    // Splash: Splash,

    // Authentication: {
    //     screen: AuthStack
    // },

    App: {
        screen: AppStack
    },
})


const Navigator = createAppContainer(SwitchNavigator);

export default Navigator