import * as React from 'react';
import { Text,View,StyleSheet} from 'react-native';

export default class AppHeader extends React.Component{
render(){
return(
<View style= {styles.textContainer}>
<Text style={styles.text}>News Letter</Text>
</View>
);
}
}

const styles = StyleSheet.create({
textContainer:{
backgroundColor: 'blue',
},
text:{
color: 'white',
padding: 20,
fontSize: 22,
fontWeight: 'bold',
textAlign: 'center',
}
});

