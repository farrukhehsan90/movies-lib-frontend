import React from 'react'
import {View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList, ImageBackground} from 'react-native'
import { connect } from 'react-redux';
import {signup} from '../../Redux/Actions/userAction'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import HeaderCustom from '../../Constant/Header'

const menu = require('../../../assets/menu.png')
const search = require('../../../assets/search.png')
const film1 = require('../../../assets/film1.jpg')
const film2 = require('../../../assets/film2.jpg')
const film3 = require('../../../assets/film3.jpg')


class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arra: [
                {
                 image: film1,
                 name: 'Spiderman'
                },
                {
                image: film2,
                name: 'Aquaman'
                },
                {
                image: film3,
                name: 'Darktower'
                },
                {
                image: film1,
                name: 'Spiderman'
                },
                {
                image: film2,
                name: 'Aquaman'
                },
                {
                image: film3,
                name: 'Darktower'
                },
                {
                image: film1,
                name: 'Spiderman'
                },
                {
                image: film2,
                name: 'Aquaman'
                },
                {
                image: film3,
                name: 'Darktower'
                },
                {
                image: film1,
                name: 'Spiderman'
                },
                {
                image: film2,
                name: 'Aquaman'
                },
                {
                image: film3,
                name: 'Darktower'
                },
                
            ]
        }
    }




    render() {
        return (
            <View style={styles.mainContainer}>
                <HeaderCustom heading={"Movies"} />
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <View style={styles.itemContaier}>
                            <FlatList
                                data={this.state.arra}
                                renderItem={({ item , index}) => {
                                    return(
                                        <TouchableOpacity 
                                        key={index}
                                        onPress={() => this.props.navigation.navigate('MovieDetail')}
                                        style={styles.movieItemContainer} >
                                            <Image source={item.image} style={styles.movieItemImage}  />
                                            <Text style={styles.movieName}>
                                                {item.name}
                                            </Text>
                                        </TouchableOpacity>

                                    )
                                }
                                }
                                numColumns={3}
                                key={3}
                                keyExtractor={(item, index) => index}
                            />      
                        </View>
                        
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    iconImage: {
        height: 25,
        width: 25
    },
    itemContaier: {
        padding: 10
    },
    movieItemContainer: { 
        width: wp(29) , 
        height: 170, 
        margin: 5, 
    },
    movieItemImage: {
        height:150, 
        width: wp(29),
        borderRadius: 10
    },
    movieName: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign:'center'
    }
})

const mapStateToProps = state => {
	return {
        userDetails: state.user.userDetails,
        fetching: state.user.fetching,
	};
  };
  
  const mapDispatchToProps = {
    signup,
  };


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);