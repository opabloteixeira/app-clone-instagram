import React, { Component } from 'react'

import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native'

import api from '../services/api'
import camera from '../assets/camera.png'
import more from '../assets/more.png'
import like from '../assets/like.png'
import comment from '../assets/comment.png'
import send from '../assets/send.png'


export default class Feed extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity 
                style={{ marginRight: 20 }}
                onPress={ () => navigation.navigate('New') }
            >
                <Image source={ camera } />
            </TouchableOpacity>
        )
        
    }) 


    state = {
        feed: []
    }

    async componentDidMount(){
        // this.registerToSocket()
        const response = await api.get('posts');

        console.log(response.data) 
        
        this.setState({
            feed: response.data
        })
    }



    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.feed}
                    keyExtractor={post => post._id}  
                    renderItem={ ({ item }) => (

                        <View style={styles.feedItem}>
                            <View style={styles.feedItemHeader}>
                                <View style={styles.userInfo}>
                                    <View style={styles.name}>
                                        {item.author}
                                    </View>
                                    <View style={styles.place}>
                                        {item.place}
                                    </View>

                                    <Image source={more}/>

                                </View>
                            </View>
                        </View>
                    )}
                /> 

            </View>
        )
    } 
    
    
    
    
}   

const styles = StyleSheet.create({

})
