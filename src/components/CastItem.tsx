import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Cast } from '../interfaces/creditsInterface';

interface Props{
    actor: Cast,

}

const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`


  return (
    <View style={ styles.container }>
        {
            actor.profile_path && 
            ( <Image source={{ uri }} style={{ width: 50, height: 50, borderRadius: 10 }} /> )
        }
        
        <View style={ styles.actorInfo }>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{ actor.name }</Text>
            <Text style={{ fontSize: 16, opacity: .7 }}>{ actor.character }</Text>
        </View>
    </View>
  )
}

export default CastItem

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 50,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        borderRadius: 18,
        elevation: 10,
        marginLeft: 15,
        paddingRight: 15
    },

    actorInfo:{
        marginLeft: 10,
        marginTop: 2
    }
})