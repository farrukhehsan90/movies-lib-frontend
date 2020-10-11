import React from 'react'
import { View, Text, Image , ScrollView, TouchableOpacity, StyleSheet, FlatList} from 'react-native'
import HeaderCustom from '../../Constant/Header'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

const film1 = require('../../../assets/film1.jpg')
const film2 = require('../../../assets/film2.jpg')
const film3 = require('../../../assets/film3.jpg')

const star = require('../../../assets/star.png')

class MovieDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: ['funny', 'family', 'thriller', 'mystery', 'horror'],
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
            ],
            cast: ['Johnny depth', 'Scarlet', 'Emma watson', 'Ronaldo', 'Lorem Ipsum'],

        }

    }

    render() {
        const { tags, arra, cast } = this.state
        return(
            <View style={styles.mainContaine}>
                <HeaderCustom />
                    <ScrollView>
                        <View style={styles.mainContaine}>
                            {/* BANNER */}
                            <View>
                                <Image source={film1} style={styles.Filmbanner} />
                            </View>

                            {/* FIRST ROW */}
                            <View style={styles.rowStyle}>
                                <Text style={styles.subHeading}>
                                    Spiderman
                                </Text>
                                <View style={styles.rowStyle}>
                                    <Text style={styles.textRegular}>
                                        7-Oct-2020 | 
                                    </Text>
                                    <Text style={styles.textRegular}>
                                       8.7 
                                    </Text>
                                    <Image source={star} style={styles.starstyle} />
                                    
                                </View>
                            </View>

                            {/* TAGS */}

                            <FlatList
                                data={tags}
                                numColumns={4}
                                key={3}
                                keyExtractor={(item, index) => index}
                                renderItem={({item, index}) => {
                                    return(
                                        <View key={index} style={styles.tagContainer}>
                                            <Text style={styles.tagText}>
                                                {item}
                                            </Text>
                                        </View>
                                    )
                                }}

                            />

                            {/* SYNOPSIS */}

                            <View>
                                <Text style={styles.subHeading}>
                                    SYNOPSIS
                                </Text>
                                    <Text style={styles.descriptionStyle}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt pretium lectus a rhoncus. Vivamus mollis massa erat, vitae varius urna bibendum quis. Proin cursus odio bibendum, condimentum libero vel, auctor massa. 
                                    </Text>
                            </View>

                            {/* CAST */}

                            <View>
                                <Text style={styles.subHeading}>
                                    Cast
                                </Text>
                                <FlatList
                                data={cast}
                                // numColumns={5}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                // key={3}
                                // keyExtractor={(item, index) => index}
                                renderItem={({item, index}) => {
                                    return(
                                        <View key={index} style={styles.castContainer}>
                                            <Text style={styles.castText}>
                                                {item}
                                            </Text>
                                        </View>
                                    )
                                }}

                            />
                            </View>



                            {/* RELATED MOVIES */}
                                
                            <View>
                                <Text style={{...styles.subHeading, marginTop: 6}}>
                                    Related Movies
                                </Text>
                                <FlatList
                                    style={{paddingHorizontal:10}}
                                    horizontal
                                    data={arra}
                                    showsHorizontalScrollIndicator={false}
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
                                />
                            </View>
                            

                        </View>
                    </ScrollView>
            </View>
        )
            
    }
}


const mapStateToProps = state => {
	return {
        
	};
  };
  
  const mapDispatchToProps = {

  };


export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);




const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
    },
    textRegular: {
        color: '#000',
        paddingVertical: 13,
        paddingHorizontal: 3
    },
    subHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10
    },
    mainContaine: {
        flex: 1
    },
    Filmbanner: {
        width: wp(100),
        height: hp(30)
    },
    rowStyle: {
        flexDirection: 'row',
    },
    starstyle: {
        height: 15,
        width: 15,
        top: 13,
    },
    tagContainer: {
        width: wp(23),
        backgroundColor:'#000',
        borderRadius:20,
        padding: 10,
        margin: 3
    },
    tagText:{
        color: '#fff',
        textAlign:'center'
    },
    descriptionStyle: {
        // color: '#bdbdbd'
        paddingHorizontal: 10
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
    },
    castContainer: {
        // width: wp(23),
        paddingHorizontal: 10,
        // margin: 3
    },
    castText: {
        textDecorationLine:'underline'
    }
})