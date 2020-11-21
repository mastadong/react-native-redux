import React, { Component } from 'react';
import { ScrollView } from 'react-native';

class AboutComponent extends Component{

    static navigationOptions = {
        title: 'About Us'
    }

    render(){
        return (
            <ScrollView></ScrollView>
        );
    }


}

export default AboutComponent;