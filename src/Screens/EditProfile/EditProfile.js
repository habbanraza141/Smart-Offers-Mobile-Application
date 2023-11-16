import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Colors, Icon} from '../../config';
import CheckboxList from '../../components/rn-checkbox-list';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux';
import {categoryList, updateProfile} from '../../redux/actions';
import moment from 'moment';

const {height, width} = Dimensions.get('screen');

class App extends Component {
  state = {
    firstName: this.props.user.user_fname,
    lastName: this.props.user.user_lname,
    dateOfBirth:
      this.props.user.user_dob != null
        ? new Date(moment(this.props.user.user_dob).format())
        : new Date(),
    city: this.props.user.user_city,
    province: this.props.user.user_state,
    pickerModal: false,
    imageUrl: '', // this.props.user.user_image,
    imageType: '',
    categoryID:
      this.props.user.userCategory != null ? this.props.user.userCategory : [],
    categoryList: [],
    gender: this.props.user.user_gender,
  };

  componentDidMount() {
    this.props.categoryList(this.saveCategory);
  }

  saveCategory = categoryList => {
    this.setState({categoryList});
  };

  updateProfile = () => {
    const {
      firstName,
      lastName,
      dateOfBirth,
      city,
      province,
      imageUrl,
      imageType,
      categoryID,
      gender,
    } = this.state;
    if (!firstName && !lastName && !dateOfBirth && !city && !province) {
      return Toast.show({
        text1: 'Please enter all info',
        type: 'error',
        visibilityTime: 3000,
      });
    }
    const goto = 'Profile';
    const dob = moment(dateOfBirth).format('YYYY MM DD');

    let category_id = [];

    if (categoryID != null) {
      category_id = categoryID.map(category_id => {
        return {
          category_id,
        };
      });
    }
    this.props.updateProfile(
      firstName,
      lastName,
      dob,
      city,
      province,
      imageUrl,
      imageType,
      category_id,
      gender,
      goto,
    );
  };

  uploadImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      this.setState({imageUrl: image.path, imageType: image.mime});
    });
  };

  _selection = gender1 => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({gender: gender1});
        }}
        style={[
          {
            width: 80,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            backgroundColor:
              this.state.gender === gender1 ? Colors.primary : Colors.border,
          },
        ]}>
        {gender1 === 'others' ? (
          <Text
            style={{
              fontSize: 14,
              color: 'white',
            }}>
            Other
          </Text>
        ) : (
          <Image
            source={
              gender1 === 'male'
                ? require('../../assets/IconMale.png')
                : require('../../assets/IconFemale.png')
            }
            style={{
              width: 17,
              height: 45,
            }}
          />
        )}
      </TouchableOpacity>
    );
  };

  render() {
    const {
      firstName,
      lastName,
      dateOfBirth,
      city,
      province,
      pickerModal,
      imageUrl,
      categoryList,
      categoryID,
      gender,
    } = this.state;
    const {user_image} = this.props.user;

    return (
      <ImageBackground
        source={require('../../assets/bg.png')}
        resizeMode="stretch"
        style={{
          flex: 1,
        }}>
        <DateTimePickerModal
          isVisible={pickerModal}
          mode="date"
          onConfirm={date => {
            this.setState({pickerModal: false, dateOfBirth: date});
          }}
          onCancel={() => {
            this.setState({pickerModal: false});
          }}
          date={dateOfBirth}
        />
        <View style={{width: '100%', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Profile');
            }}
            style={{
              position: 'absolute',
              top: getStatusBarHeight() + 15,
              left: 25,
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: '#fff',
              }}
              source={require('../../assets/Icons/back.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              marginTop: getStatusBarHeight() + 15,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            EDIT PROFILE
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{alignItems: 'center', paddingHorizontal: 30}}>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginTop: 40,
            }}>
            <Image
              source={
                user_image
                  ? {
                      uri: `http://server.appsstaging.com:3013/${user_image}`,
                    }
                  : require('../../assets/pp.jpeg')
              }
              style={{
                width: width * 0.4,
                height: width * 0.4,
                borderRadius: (width * 0.4) / 2,
                borderColor: Colors.darkOrange,
                borderWidth: 6,
              }}
            />
            <TouchableOpacity
              onPress={this.uploadImage}
              style={{
                width: 40,
                height: 40,
                borderRadius: 40 / 2,
                backgroundColor: Colors.darkOrange,
                borderWidth: 2,
                borderColor: '#fff',
                position: 'absolute',
                bottom: 5,
                right: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/Icons/camera.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: '#fff',
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 30,
            }}>
            <View
              style={{
                width: '47%',
                borderBottomColor: 'white',
                borderBottomWidth: 1,
              }}>
              <Text style={{color: '#fff', fontSize: 12}}>First Name</Text>
              <TextInput
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  height: 40,
                  width: '100%',
                }}
                value={firstName}
                onChangeText={firstName =>
                  this.setState({firstName, error: false})
                }
                placeholder={'First Name'}
                placeholderTextColor={'#fff'}
              />
            </View>
            <View
              style={{
                width: '47%',
                borderBottomColor: 'white',
                borderBottomWidth: 1,
              }}>
              <Text style={{color: '#fff', fontSize: 12}}>Last Name</Text>
              <TextInput
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  height: 40,
                  width: '100%',
                }}
                value={lastName}
                onChangeText={lastName =>
                  this.setState({lastName, error: false})
                }
                placeholder="Last Name"
                placeholderTextColor={'#fff'}
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              marginTop: 20,
              borderBottomWidth: 1,
              borderBottomColor: 'white',
            }}>
            <Text style={{color: '#fff', fontSize: 12}}>Date of Birth</Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({pickerModal: true});
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  height: 40,
                  width: '85%',
                  paddingVertical: 10,
                }}>
                {dateOfBirth.toDateString()}
              </Text>
              <Image
                source={require('../../assets/Icons/calendar.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: '#fff',
                  position: 'absolute',
                  right: 0,
                  bottom: 5,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 20,
            }}>
            <View
              style={{
                width: '47%',
                borderBottomColor: 'white',
                borderBottomWidth: 1,
              }}>
              <Text style={{color: '#fff', fontSize: 12}}>City</Text>
              <TextInput
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  height: 40,
                  width: '100%',
                }}
                value={city}
                onChangeText={city => this.setState({city, error: false})}
                placeholder="City"
                placeholderTextColor={'#fff'}
              />
            </View>
            <View
              style={{
                width: '47%',
                borderBottomColor: 'white',
                borderBottomWidth: 1,
              }}>
              <Text style={{color: '#fff', fontSize: 12}}>
                Province / State
              </Text>
              <TextInput
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  height: 40,
                  width: '100%',
                }}
                value={province}
                onChangeText={province =>
                  this.setState({province, error: false})
                }
                placeholder="Province / State"
                placeholderTextColor={'#fff'}
              />
            </View>
          </View>
          <View style={{width: '100%', marginTop: 30}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 12,
              }}>
              Gender
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-between',
                width: '90%',
              }}>
              {this._selection('male')}
              {this._selection('female')}
              {this._selection('others')}
            </View>
          </View>
          <View
            style={{
              backgroundColor: Colors.primary,
              borderRadius: 10,
              marginTop: 20,
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 15,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../assets/Icons/bell.png')}
                style={{
                  width: 20,
                  height: 25,
                  tintColor: Colors.yellow,
                  resizeMode: 'stretch',
                }}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '700',
                  marginLeft: 10,
                }}>
                Notify me for new offer on:
              </Text>
            </View>
            <CheckboxList
              theme="white"
              listItems={categoryList}
              onChange={({ids}) => {
                ids[0] != categoryID[0]
                  ? this.setState({categoryID: ids})
                  : null;
              }}
              // selectedListItems={categoryList}
              checkboxProp={{
                boxType: 'square',
                tintColor: 'white',
                onCheckColor: Colors.darkOrange,
                tintColors: {true: '#fff', false: '#fff'},
              }}
              onLoading={() => <ActivityIndicator size="large" />}
              textStyle={{color: 'white'}}
            />
          </View>
          <TouchableOpacity
            onPress={this.updateProfile}
            style={{
              width: '100%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              marginVertical: 30,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 16}}>Done</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    );
  }
}

function mapState({reducer: {user}}) {
  return {
    user,
  };
}

function mapDispatch(dispatch) {
  return {
    categoryList: saveCategory => {
      dispatch(categoryList(saveCategory));
    },
    updateProfile: (
      firstName,
      lastName,
      dateOfBirth,
      city,
      province,
      imageUrl,
      imageType,
      userCategory,
      gender,
      goto,
    ) => {
      dispatch(
        updateProfile(
          firstName,
          lastName,
          dateOfBirth,
          city,
          province,
          imageUrl,
          imageType,
          userCategory,
          gender,
          goto,
        ),
      );
    },
  };
}

export default connect(
  mapState,
  mapDispatch,
)(App);
