
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView,
    Picker,
    ActivityIndicator,
    Button,
    Image
  } from 'react-native';
  import React, { Component, setState } from 'react';
  import DatePicker from 'react-native-datepicker';
  import * as ImagePicker from 'expo-image-picker';
  import * as Permissions from 'expo-permissions';


 
  
  export default class UpdateProfile extends Component {
      constructor(props) {
        super(props);
        this.state = {
          UserEmail: '',
          idcardnumber: '',
          placeofbirth: '',
          dateofbirth: '',
          Gender: '',
          Religion: '',
          ImageKTP: '',
          ImageSelfie: '',
          StatusMarriage: '',
          Education : '',
          TaxID: '',
          ImageFamilyMemberCard: '',
          Occupation: '',
          Fields: '',
          Position: '',
          StatusOfEmployment: '',
          ProofOfEmployment: '',
          ProofOfIncome: '',
          ProofOfBusiness: '',
          ProofOfBusinessIncome: '',
          Type: '',
          Status: '',
          Village_ID: '',
          Province_ID: '',
          Street: '',
          Number: '',
          RT: '',
          RW: '',
          City: '',
          SubDistrict: '',
          PostalCode: '',
          ResidentialStatus: '',
          Duration: '',
          ProofOfResidence: '',
          Name: '',
          Phone: '',
          Relationship : '',
          dataSource : [],
          data : [],
          isLoading : true,
          uploading : false,
          
        }
      }
     

      _pickImage = async () => {
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 4]
        });
        if (!cancelled) {
          this.setState({ ImageKTP: uri }, () => {
            this.createFormData(uri);
          });
        }
      };
 
 
      _pickImage2 = async () => {
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 4]
        });
        if (!cancelled) {
          this.setState({ ImageSelfie: uri }, () => {
            this.createFormData2(uri);
          });
        }
      };
 

      _pickImage3 = async () => {
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 4]
        });
        if (!cancelled) {
          this.setState({ ImageFamilyMemberCard: uri }, () => {
            this.createFormData3(uri);
          });
        }
      };
 
    
      
      createFormData = async (uri) =>  {
        let ImageKTP = this.state;
        if(!ImageKTP) return;
        let apiUrl = 'http://192.168.0.20/edufund-api/Api/uploading.php?ImageKTP = ' +ImageKTP;
        let uriParts = uri.split('.');
        let fileType = /\.(\w+)$/.exec(uriParts);
        let file = fileType;

  let formData = new FormData();
  formData.append('ImageKTP', {
    uri,
    name: `ImageKTP.${file}`,
    type: `image/${file}`,
  });

  console.log(ImageKTP);


  let options = {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
      
    },
  };

  return fetch(apiUrl, options);
}
        
        
createFormData2 = async (uri) =>  {
  let ImageSelfie = this.state;
  if(!ImageSelfie) return;
  let apiUrl = 'http://192.168.0.20/edufund-api/Api/uploading2.php?ImageSelfie = ' +ImageSelfie;
  let uriParts = uri.split('.');
  let fileType = /\.(\w+)$/.exec(uriParts);
  let file = fileType;

let formData = new FormData();
formData.append('ImageSelfie', {
uri,
name: `ImageSelfie.${file}`,
type: `image/${file}`,
});

console.log(ImageSelfie);

let options = {
method: 'POST',
body: formData,
headers: {
  'Accept': 'application/json',
'Content-Type': 'multipart/form-data',

},
};

return fetch(apiUrl, options);
}

createFormData3 = async (uri) =>  {
  let ImageFamilyMemberCard = this.state;
  if(!ImageFamilyMemberCard) return;
  let apiUrl = 'http://192.168.0.20/edufund-api/Api/uploading3.php?ImageFamilyMemberCard = ' +ImageFamilyMemberCard;
  let uriParts = uri.split('.');
  let fileType = /\.(\w+)$/.exec(uriParts);
  let file = fileType ? `image/${fileType[1]}` : `image`;

let formData = new FormData();
formData.append('ImageFamilyMemberCard', {
uri,
name: `ImageFamilyMemberCard.${file}`,
type: `image/${file}`,
});

console.log(ImageFamilyMemberCard);


let options = {
method: 'POST',
body: formData,
headers: {
'Accept': 'application/json',
'Content-Type': 'multipart/form-data',

},
};

return fetch(apiUrl, options);
}

      componentDidMount = () => {
       this.GetProvince();
       this.GetVillage();
       this.GetProfile();
      }

      

      GetProvince = () => {
        return fetch('http://192.168.0.20/edufund-api/Api/province.php')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
      }

      GetVillage = () => {
        return fetch('http://192.168.0.20/edufund-api/Api/village.php')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            data: responseJson
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
      }
      
      

      GetProfile = () => {
        let UserEmail = this.props.navigation.state.params.UserEmail;
        var api = "http://192.168.0.20/edufund-api/Api/getprofileaccountbyemail.php?email=" +UserEmail;
        console.log(api);
        return fetch(api)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({ 
            data2: responseJson,
            idcardnumber : responseJson.idcardnumber,
            placeofbirth : responseJson.placeofbirth,
            dateofbirth : responseJson.dateofbirth,
            Gender : responseJson.Gender,
            Religion : responseJson.Religion,
            ImageKTP : responseJson.ImageKTP,
            ImageSelfie : responseJson.ImageSelfie,
            StatusMarriage : responseJson.StatusMarriage,
            Education : responseJson.Education,
            TaxID : responseJson.TaxID,
            ImageFamilyMemberCard : responseJson.ImageFamilyMemberCard,
            Occupation: responseJson.Occupation,
            Fields : responseJson.Fields,
            Position : responseJson.Position,
            StatusOfEmployment : responseJson.StatusOfEmployment,
            ProofOfEmployment : responseJson.ProofOfEmployment,
            ProofOfIncome : responseJson.ProofOfIncome,
            ProofOfBusiness : responseJson.ProofOfBusiness,
            ProofOfBusinessIncome : responseJson.ProofOfBusinessIncome,
            Status : responseJson.Status,
            Type : responseJson.Type,
            Village_ID : responseJson.Village_ID,
            Province_ID : responseJson.Province_ID,
            Street : responseJson.Street,
            Number : responseJson.Number,
            RT : responseJson.RT,
            RW : responseJson.RW,
            City : responseJson.City,
            SubDistrict : responseJson.SubDistrict,
            PostalCode : responseJson.PostalCode,
            ResidentialStatus : responseJson.ResidentialStatus,
            Duration : responseJson.Duration,
            ProofOfResidence : responseJson.ProofOfResidence,
            Name : responseJson.Name,
            Phone : responseJson.Phone,
            Relationship : responseJson.Relationship

          })
      if(responseJson.status === true)
      {
      
        this.props.navigation.navigate('UpdateProfile')
      }
   
   
       }).catch((error) => {
         console.error(error);
       });
    
   }

      UpdateProfileFunction = () => {
        let UserEmail = this.props.navigation.state.params.UserEmail;
        const { idcardnumber }  = this.state;
        const { placeofbirth} = this.state;
        const {dateofbirth} = this.state;
        const {Gender} = this.state;
        const {Religion} = this.state;
        const {ImageKTP} = this.state;
        const {ImageSelfie} = this.state;
        const {StatusMarriage} = this.state;
        const {Education} = this.state;
        const {TaxID} = this.state;
        const {ImageFamilyMemberCard} = this.state;
        const {Occupation} = this.state;
        const {Fields} = this.state;
        const {Position} = this.state;
        const {StatusOfEmployment} = this.state;
        const {ProofOfEmployment} = this.state;
        const {ProofOfIncome} = this.state;
        const {ProofOfBusiness} = this.state;
        const {ProofOfBusinessIncome} = this.state;
        const {Type} = this.state;
        const {Village_ID} = this.state;
        const {Province_ID} = this.state;
        const {Street} = this.state;
        const {Number} = this.state;
        const {RT} = this.state;
        const {RW} = this.state;
        const {City} = this.state;
        const {SubDistrict} = this.state;
        const {PostalCode} = this.state;
        const {ResidentialStatus} =this.state;
        const {Duration} = this.state;
        const {ProofOfResidence} = this.state;
        const {Name} = this.state;
        const {Phone} = this.state;
        const {Relationship} = this.state;

        

        fetch("http://192.168.0.20/edufund-api/Api/profile.php?",{
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            email  : UserEmail,
            idcardnumber : idcardnumber,
            placeofbirth: placeofbirth,
            dateofbirth: dateofbirth,
            Gender : Gender,
            Religion : Religion,
            ImageKTP : ImageKTP,
            ImageSelfie: ImageSelfie,
            StatusMarriage : StatusMarriage,
            Education : Education,
            TaxID : TaxID,
            ImageFamilyMemberCard : ImageFamilyMemberCard,
            Occupation : Occupation,
            Fields: Fields,
            Position: Position,
            StatusOfEmployment : StatusOfEmployment,
            ProofOfEmployment : ProofOfEmployment,
            ProofOfIncome : ProofOfIncome,
            ProofOfBusiness: ProofOfBusiness,
            ProofOfBusinessIncome: ProofOfBusinessIncome,
            Type : Type,
            Status : 'Active',
            Village_ID : Village_ID,
            Province_ID: Province_ID,
            Street : Street,
            Number : Number,
            RT: RT,
            RW: RW,
            City: City,
            SubDistrict : SubDistrict,
            PostalCode : PostalCode,
            ResidentialStatus : ResidentialStatus,
            Duration : Duration,
            ProofOfResidence : ProofOfResidence,
            Name : Name,
            Phone: Phone,
            Relationship : Relationship

     
          })
        })
        .then((response) => response.json())
        .then((responseJson) => {
         if(responseJson.success === 1)
          {
            alert(responseJson.message);
            this.props.navigation.navigate('HomeScreen')
          
          }
          else{
            alert(responseJson.message);
          }
       
           }).catch((error) => {
             console.error(error);
           });
       }
    
       
       
      render() 
      {
       
        if (this.state.isLoading) {
          return (
            <View style={{flex: 1, paddingTop: 20}}>
              <ActivityIndicator />
            </View>
          );
        }
        return (
            <View style={styles.container}>
            <Text style={styles.headerTxt}>Update Loan Profile </Text>
            <View style={styles.subView}>
            <ScrollView>
            <Text style={styles.subTxt}>Email: { this.props.navigation.state.params.UserEmail }  </Text>
              <TextInput style={styles.nameInput} 
              placeholder="Id Card Number" 
              onChangeText={idcardnumber => this.setState ({idcardnumber})}
              value = {this.state.idcardnumber}
              keyboardType="numeric"
              />
                <TextInput style={styles.nameInput} 
              placeholder="Place of birth" 
              onChangeText={placeofbirth => this.setState ({placeofbirth})}
              value = {this.state.placeofbirth}/>
              <DatePicker
          style={{width: 300}}
          date={this.state.dateofbirth} 
          mode="date" 
          placeholder="select date of birth"
          format="YYYY-MM-DD"
          minDate="1950-01-01"
          maxDate="2020-12-31"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(dateofbirth) => {this.setState({dateofbirth: dateofbirth})}}
          value = {this.state.dateofbirth}
        />
            <Text  style = {styles.subTxt}>Gender</Text>
          <Picker
           style = {styles.subTxt}
          selectedValue={this.state.Gender}
          onValueChange={(itemValue, itemIndex) => this.setState({ Gender: itemValue })}>
            <Picker.Item label="select gender" value="0" />
          <Picker.Item label="Laki-Laki" value="L" />
          <Picker.Item label="Perempuan" value= "P" />
          </Picker>
          <Text  style = {styles.subTxt}>Religion</Text>
          <Picker
           style = {styles.subTxt}
          selectedValue={this.state.Religion}
          onValueChange={(itemValue, itemIndex) => this.setState({ Religion: itemValue })}>
           <Picker.Item label="select religion" value="0" />
          <Picker.Item label="Kristen" value="Kristen" />
          <Picker.Item label="Katolik" value= "Katolik" />
          <Picker.Item label="Islam" value= "Islam" />
          <Picker.Item label="Hindu" value= "Hindu" />
          <Picker.Item label="Buddha" value= "Buddha" />
          </Picker>
          <Button
          onPress={this._pickImage}
          title="Browse Image KTP"
        />
       {this.state.ImageKTP  ? <Image source={{uri: this.state.ImageKTP}}  style={{ width: 200, height: 200 }} /> : null }
      
         <Button
          onPress={this._pickImage2}
          title="Browse Image Selfie"
        />
         {this.state.ImageSelfie ? <Image source={{uri: this.state.ImageSelfie}} style={{ width: 200, height: 200 }} /> : null }
         
              <Text  style = {styles.subTxt}>Status Marriage</Text>
               <Picker
                style = {styles.subTxt}
                selectedValue={this.state.StatusMarriage}
                onValueChange={(itemValue, itemIndex) => this.setState({ StatusMarriage: itemValue })}>
                <Picker.Item label="select status marriage" value="0" />
                <Picker.Item label="Married" value="Married" />
                <Picker.Item label="Not Married" value= "Not Married" />
              </Picker>
               <Text  style = {styles.subTxt}>Education</Text>
               <Picker
                style = {styles.subTxt}
                selectedValue={this.state.Education}
                onValueChange={(itemValue, itemIndex) => this.setState({ Education: itemValue })}>
                <Picker.Item label="select education" value="0" />
                <Picker.Item label="D3" value="D3" />
                <Picker.Item label="S1" value= "S1" />
                <Picker.Item label="S2" value= "S2" />
                <Picker.Item label="S3" value= "S3" />
              </Picker>
              <TextInput style={styles.nameInput} 
              placeholder="Tax ID" 
              onChangeText={TaxID => this.setState ({TaxID})}
              value = {this.state.TaxID}/>
              <Button
          onPress={this._pickImage3}
          title="Browse Image Family Member Card"
        />
          {this.state.ImageFamilyMemberCard ? <Image source={{uri: this.state.ImageFamilyMemberCard}} style={{ width: 200, height: 200 }} /> : null }
          
              <TextInput style={styles.nameInput} 
              placeholder="Occupation" 
              onChangeText={Occupation => this.setState ({Occupation})}
              value = {this.state.Occupation}/>
              <TextInput style={styles.nameInput} 
              placeholder="Fields" 
              onChangeText={Fields => this.setState ({Fields})}
              value = {this.state.Fields}/>
               <TextInput style={styles.nameInput} 
              placeholder="Position" 
              onChangeText={Position => this.setState ({Position})}
              value = {this.state.Position}/>
               <TextInput style={styles.nameInput} 
              placeholder="Status Of Employment" 
              onChangeText={StatusOfEmployment => this.setState ({StatusOfEmployment})}
              value = {this.state.StatusOfEmployment}/>
               <TextInput style={styles.nameInput} 
              placeholder="Proof Of Employment" 
              onChangeText={ProofOfEmployment => this.setState ({ProofOfEmployment})}
              value = {this.state.ProofOfEmployment}/>
               <TextInput style={styles.nameInput} 
              placeholder="Proof Of Income" 
              onChangeText={ProofOfIncome => this.setState ({ProofOfIncome})}
              value = {this.state.ProofOfIncome}
              keyboardType="numeric"/>
               <TextInput style={styles.nameInput} 
              placeholder="Proof Of Business" 
              onChangeText={ProofOfBusiness => this.setState ({ProofOfBusiness})}
              value = {this.state.ProofOfBusiness}/>
                <TextInput style={styles.nameInput} 
              placeholder="Proof Of Business Income" 
              onChangeText={ProofOfBusinessIncome => this.setState ({ProofOfBusinessIncome})}
              value = {this.state.ProofOfBusinessIncome}
              keyboardType="numeric"/>
                <TextInput style={styles.nameInput} 
              placeholder="Type" 
              onChangeText={Type => this.setState ({Type})}
              value = {this.state.Type}/>
              
              
               <Text style={styles.subTxt}>Address</Text>
               <Text  style = {styles.subTxt}>Village</Text>
               <Picker
            style = {styles.subTxt}
            selectedValue={this.state.Village_ID}
            onValueChange={(itemValue, itemIndex) => this.setState({Village_ID: itemValue})} justifyContent={'center'} alignItems={'center'}   >
            { this.state.data.map((item, key)=>(
            <Picker.Item label={item.village_name} value={item.village_id} key={key}/>)
            )}
          </Picker>
          <Text  style = {styles.subTxt}>Province</Text>
          <Picker
          style = {styles.subTxt}
            selectedValue={this.state.Province_ID}
            onValueChange={(itemValue, itemIndex) => this.setState({Province_ID: itemValue})} justifyContent={'center'} alignItems={'center'}  >
            { this.state.dataSource.map((item, key)=>(
           <Picker.Item label={item.province_name} value={item.province_id} key={key}/>)
            )}
          </Picker>
               <TextInput style={styles.nameInput} 
              placeholder="Street" 
              onChangeText={Street => this.setState ({Street})}
              value = {this.state.Street}
              />
              <TextInput style={styles.nameInput} 
              placeholder="Number" 
              onChangeText={Number => this.setState ({Number})}
              value = {this.state.Number}
              keyboardType="numeric"/>
              <TextInput style={styles.nameInput} 
              placeholder="RT" 
              onChangeText={RT => this.setState ({RT})}
              value = {this.state.RT}
              keyboardType="numeric"/>
              <TextInput style={styles.nameInput} 
              placeholder="RW" 
              onChangeText={RW => this.setState ({RW})}
              value = {this.state.RW}
              keyboardType="numeric"/>
               <TextInput style={styles.nameInput} 
              placeholder="City" 
              onChangeText={City => this.setState ({City})}
              value = {this.state.City}/>
               <TextInput style={styles.nameInput} 
              placeholder="Sub District" 
              onChangeText={SubDistrict => this.setState ({SubDistrict})}
              value = {this.state.SubDistrict}
              />
               <TextInput style={styles.nameInput} 
              placeholder="Postal Code" 
              onChangeText={PostalCode => this.setState ({PostalCode})}
              value = {this.state.PostalCode}
              keyboardType="numeric"/>
               <TextInput style={styles.nameInput} 
              placeholder="Residential Status" 
              onChangeText={ResidentialStatus => this.setState ({ResidentialStatus})}
              value = {this.state.ResidentialStatus}/>
               <TextInput style={styles.nameInput} 
              placeholder="Duration" 
              onChangeText={Duration => this.setState ({Duration})}
              value = {this.state.Duration}
              keyboardType="numeric"/>
               <TextInput style={styles.nameInput} 
              placeholder="Proof Of Residence" 
              onChangeText={ProofOfResidence => this.setState ({ProofOfResidence})}
              value = {this.state.ProofOfResidence}/>
              
               <Text style={styles.subTxt}>Emergency Contact</Text>
               <TextInput style={styles.nameInput} 
              placeholder="Name Emergency Contact" 
              onChangeText={Name => this.setState ({Name})}
              value = {this.state.Name}/>
               <TextInput style={styles.nameInput} 
              placeholder="Phone Emergency Contact" 
              onChangeText={Phone => this.setState ({Phone})}
              value = {this.state.Phone}
              keyboardType="numeric"/>
               <TextInput style={styles.nameInput} 
              placeholder="Relationship" 
              onChangeText={Relationship => this.setState ({Relationship})}
              value = {this.state.Relationship}/>
               <TouchableOpacity style={styles.btn}  onPress={this.UpdateProfileFunction}>
              <Text style={styles.btnTxt}>Update Profile</Text>
              </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={styles.btnTxt}>Go Back to Home</Text>
              </TouchableOpacity>
              </ScrollView>
            </View>
              </View>
              
        );
      }
    }
    
  
    
  
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#1E90FF',
        height: 700,
      },
      genderCard: {
        paddingLeft: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 16,
        backgroundColor: 'white',
        height: 55,
        elevation: 1,
      },
      subView: {
        backgroundColor: 'white',
        height: 400,
        marginTop: 240,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
      },
      headerTxt: {
        fontSize: 25,
        marginLeft: 40,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        marginTop: 140,
      },
      subTxt: {
        color: 'black',
        marginTop: 20,
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 40,
      },
      nameInput: {
        height: 40,
        width: 270,
        marginLeft: 40,
        borderBottomWidth: 1,
        marginTop: 30,
      },
      btn: {
        height: 50,
        width: 200,
        backgroundColor: '#fd7e14',
        borderRadius: 80,
        marginLeft: 70,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnTxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
      },
      endView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      endTxt: {
        fontSize: 15,
        marginTop: 30,
        marginLeft: 60,
        fontWeight: 'bold',
      },
      endBtn: {
        marginRight: 80,
      },
      loginTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 24,
      },
      TextComponentStyle: {
          fontSize: 20,
         color: "#000",
         textAlign: 'center', 
         marginBottom: 15
        }
    });
  