import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';

import  Icon  from 'react-native-vector-icons/FontAwesome';
import currencyFormater from 'currency-formatter';
import CastItem from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props{
    movieFull: MovieFull,
    cast: Cast[]
}

const MovieDetail = ({ movieFull, cast }: Props) => {
  return (
    <>
        <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
            <View style={{ flexDirection: 'row' }}>
                <Icon name='star' color="grey" size={ 18 } />
                <Text>{ movieFull.vote_average }</Text>
                <Text style={{ marginLeft: 5 }}>
                    - { movieFull.genres.map(g => g.name).join(', ')}
                </Text>
            </View>

            <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }} >
                History
            </Text>

            <Text style={{ fontSize: 16 }}>
                { movieFull.overview }
            </Text>

            <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }} >
                Budget: { currencyFormater.format(movieFull.budget, { code: 'USD' }) }
            </Text>
        </View>

        <View style={{ marginTop: 5, marginBottom: 100 }}>
            <Text style={{ fontSize: 20, marginTop: 5, fontWeight: 'bold', marginHorizontal: 20 }} >
                Actors
            </Text>

            <FlatList
                data={ cast }
                keyExtractor={ item => item.id.toString() }
                renderItem={({ item }) => <CastItem actor={ item } /> }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
                style={{ marginTop: 10, height: 70 }}
            />

            
        </View>
      
    </>
  )
}

export default MovieDetail

const styles = StyleSheet.create({})