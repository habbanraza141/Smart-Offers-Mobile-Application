import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '../../config/colors/index';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import HeaderComponent from '../../components/HeaderComponent';
import imagePath from '../../Constants/imagePath';


const PrivacyPolicy = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f0f8fb'
      }}>

      <HeaderComponent
        hdrText={'PRIVACY POLICY'}
        img={imagePath.icBack}
        onPress={() => navigation.goBack()} />
      <ScrollView style={{ padding: 20 }}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae malesuada turpis. Nam finibus felis sed molestie malesuada. Aenean consectetur, neque vitae ultricies consectetur, tortor ex volutpat quam, et euismod leo nisl sed nisl. Fusce tristique, libero vitae suscipit  viverra, nulla odio faucibus ligula, quis finibus nisi felis ut tellus. In in est{'\n'} {'\n'} quis nisi consectetur convallis vel rutrum purus. Integer mattis urna id mauris aliquam, nec iaculis ante feugiat. Suspendisse convallis iaculis dolor eu ullamcorper. Vestibulum at placerat orci. Nam pellentesque, magna eget molestie ornare, tortor sapien sodales metus, gravida posuere libero arcu non massa. Sed porttitor rhoncus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget ante dictum, facilisis nunc vel, congue arcu. Sed vestibulum mi eu ultrices rhoncus.
          {'\n'} {'\n'}
          Sed eget velit interdum, dapibus orci ut, euismod tellus. Nullam venenatis sapien at lectus venenatis, id dignissim mauris auctor. Nulla id ultrices erat. Duis consectetur est augue. Morbi at vestibulum nisl. Nam vitae placerat lectus. Proin a metus massa. Fusce nec semper sapien.
          {'\n'} {'\n'}
          In varius imperdiet enim ut mollis. Curabitur mi ipsum, scelerisque vel fermentum eget, fringilla ultricies turpis. Proin ultrices porttitor commodo. Nullam id posuere lectus, cursus tempor ligula. Curabitur tincidunt purus at euismod tincidunt. In tempor venenatis eros, nec vehicula nunc fermentum sed. Aliquam efficitur ultricies nisl eu pharetra. Aliquam efficitur condimentum purus ut gravida. Cras placerat, velit cursus molestie facilisis, enim mi rutrum urna, laoreet consequat lorem dolor blandit lorem. Vestibulum orci felis, rutrum a lobortis ac, mattis ac enim. Vestibulum cursus est et faucibus semper. Sed non feugiat mauris, eget facilisis lorem. Sed vitae suscipit tortor, eget interdum lacus. Praesent iaculis vulputate orci, quis dignissim urna vestibulum quis. Aenean fringilla est velit. Curabitur id ante interdum, gravida mauris ut, porta nisi.
          {'\n'} {'\n'}
          Nulla ullamcorper varius facilisis. Maecenas vehicula neque id lorem placerat malesuada. Integer facilisis eros in odio dapibus mollis. Donec facilisis tempor mauris vitae tincidunt. Cras ut vulputate dui. Vestibulum semper, enim ac pellentesque aliquam, diam ex maximus ante, et gravida dui metus cursus sapien. Proin interdum nec nisl vehicula molestie. Proin semper odio malesuada cursus congue. Integer id nulla eget diam interdum fringilla in nec dolor.</Text>
      </ScrollView>
    </View>
  );

}



export default PrivacyPolicy;