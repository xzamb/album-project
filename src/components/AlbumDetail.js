import React from 'react';
import {View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({albums}) =>{
    const { title, artist, thumbnail_image, image, url } = album;
    
    const { 
        headerContentStyle,
        thumbnailStyle, 
        thumbnailContainerStyle, 
        headerTextStyle, 
        imageStyle} = styles;

    return (
       <Card>
           <CardSection>
               <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{uri: thumbnail_image}}
                    />
               </View>
               <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
               </View>
           </CardSection>

           <CardSection>
               <Image 
               style={imageStyle}
               source={{ uri: image}}/>
           </CardSection>

           <CardSection>
               <Button 
                onClick={ () => Linking.openURL(url)}
                label = 'BUY NOW'/>
           </CardSection>

       </Card>
                
    );
};


const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerTextStyle: {
        fontSize: 18
    },

    thumbnailStyle: {
        height: 50,
        width: 50
    },

    thumbnailContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginLeft: 10
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }

   
}

export default AlbumDetail;