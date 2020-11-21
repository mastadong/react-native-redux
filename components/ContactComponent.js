import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

function RenderCard(){
    return(
        <Card 
            title={"Contact Information"}
            wrapperStyle={{margin:20, marginBottom:10}}>
            <Text>
                1 Nucamp Way {'\n'}
                Seattle, WA 98001{'\n'}
                U.S.A.{'\n'}{'\n'}
                Phone: 1-206-555-1234{'\n'}
                Email: campsites@nucamp.co
            </Text>
        </Card>
    );
}

class ContactComponent extends Component{

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         campsites: CAMPSITES,
    //         promotions: PROMOTIONS,
    //         partners: PARTNERS
    //     };
    // }


    static navigationOptions = {
        title: 'Contact Us'
    }

    render(){
        return (
            <ScrollView>
                <RenderCard />
            </ScrollView>
        );
    }


}

export default ContactComponent;