
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
  } from 'react-native';
  import React, { Component } from 'react';
  import DatePicker from 'react-native-datepicker';
  import { RadioButton } from 'react-native-paper';

  
  export default class UpdateProfile extends Component {
      constructor(props) {
        super(props);
        this.state = {
          UserEmail: '',
          Idcardnumber: '',
          placeofbirth: '',
          dateofbirth: '',
          gender: '',
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
          StatusofEmployment: '',
          ProofofEmployment: '',
          ProofOfIncome: '',
          ProofOfBusiness: '',
          ProofOfBusinessIncome: '',
          Type: '',
          Status: '',
          VillageID: '',
          ProvinceID: '',
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
          isLoading : true,

        }
      }
      
      componentDidMount = () => {
        return fetch('http://192.168.0.18/edufund-api/Api/province.php')
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

  
   
      
      UpdateProfileFunction = () => {
        let UserEmail = this.props.navigation.state.params.UserEmail;
        const { Idcardnumber }  = this.state ;
        const { placeofbirth} = this.state;
        const [dateofbirth] = this.state;
        const {gender} = this.state;
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
        const {StatusofEmployment} = this.state;
        const {ProofofEmployment} = this.state;
        const {ProofOfIncome} = this.state;
        const {ProofOfBusiness} = this.state;
        const {ProofOfBusinessIncome} = this.state;
        const {Type} = this.state;
        const {Status} = this.state;
        const {VillageID} = this.state;
        const {ProvinceID} = this.state;
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

        fetch("http://192.168.0.18/edufund-api/Api/profile.php",{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
     
            email : UserEmail,
            Idcardnumber : Idcardnumber,
            placeofbirth: placeofbirth,
            dateofbirth: dateofbirth,
            gender : gender,
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
            StatusofEmployment : StatusofEmployment,
            ProofofEmployment : ProofofEmployment,
            ProofOfIncome : ProofOfIncome,
            ProofOfBusiness: ProofOfBusiness,
            ProofOfBusinessIncome: ProofOfBusinessIncome,
            Type : Type,
            Status : Status,
            VillageID : VillageID,
            ProvinceID: ProvinceID,
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
         console.log(responseJson.message);
         if(responseJson.success === 1)
          {
            alert(responseJson.message)
          
          }
          else{
            alert(responseJson.message)
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
              onChangeText={Idcardnumber => this.setState ({Idcardnumber})}/>
                <TextInput style={styles.nameInput} 
              placeholder="Place of birth" 
              onChangeText={placeofbirth => this.setState ({placeofbirth})}/>
              <DatePicker
          style={{width: 300}}
          date={this.state.dateofbirth} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date of birth"
          format="DD-MM-YYYY"
          minDate="01-01-1950"
          maxDate="31-12-2020"
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
        />
               <TextInput style={styles.nameInput} 
              placeholder="Education" 
              onChangeText={Education => this.setState ({Education})}/>
              <TextInput style={styles.nameInput} 
              placeholder="Tax ID" 
              onChangeText={TaxID => this.setState ({TaxID})}/>
              <TextInput style={styles.nameInput} 
              placeholder="Occupation" 
              onChangeText={Occupation => this.setState ({Occupation})}/>
              <TextInput style={styles.nameInput} 
              placeholder="Fields" 
              onChangeText={Fields => this.setState ({Fields})}/>
               <TextInput style={styles.nameInput} 
              placeholder="Position" 
              onChangeText={Position => this.setState ({Position})}/>
               <TextInput style={styles.nameInput} 
              placeholder="Status Of Employment" 
              onChangeText={StatusofEmployment => this.setState ({StatusofEmployment})}/>
               <TextInput style={styles.nameInput} 
              placeholder="Proof Of Employment" 
              onChangeText={ProofofEmployment => this.setState ({ProofofEmployment})}/>
               <TextInput style={styles.nameInput} 
              placeholder="Proof Of Income" 
              onChangeText={ProofofIncome => this.setState ({ProofofIncome})}/>
               <TextInput style={styles.nameInput} 
              placeholder="Proof Of Business" 
              onChangeText={ProofOfBusiness => this.setState ({ProofOfBusiness})}/>
                <TextInput style={styles.nameInput} 
              placeholder="Proof Of Business Income" 
              onChangeText={ProofOfBusinessIncome => this.setState ({ProofOfBusinessIncome})}/>
                <TextInput style={styles.nameInput} 
              placeholder="Type" 
              onChangeText={Type => this.setState ({Type})}/>

               <Text style={styles.subTxt}>Address</Text>
               <Picker
            selectedValue={this.state.ProvinceID}
            onValueChange={(itemValue, itemIndex) => this.setState({ProvinceID: itemValue})} justifyContent={'center'} alignItems={'center'}  >
            { this.state.dataSource.map((item, key)=>(
            <Picker.Item label={item.province_name} value={item.province_name} key={key}/>)
            )}
          </Picker>
               <TextInput style={styles.nameInput} 
              placeholder="Street" 
              onChangeText={Street => this.setState ({Street})}/>
              <TextInput style={styles.nameInput} 
              placeholder="Number" 
              onChangeText={Number => this.setState ({Number})}/>
              <TextInput style={styles.nameInput} 
              placeholder="RT" 
              onChangeText={RT => this.setState ({RT})}/>
              <TextInput style={styles.nameInput} 
              placeholder="RW" 
              onChangeText={RW => this.setState ({RW})}/>
               <TextInput style={styles.nameInput} 
              placeholder="City" 
              onChangeText={City => this.setState ({City})}/>
               <TextInput style={styles.nameInput} 
              placeholder="Sub District" 
              onChangeText={SubDistrict => this.setState ({SubDistrict})}/>
               <TextInput style={styles.nameInput} 
              placeholder="Postal Code" 
              onChangeText={PostalCode => this.setState ({PostalCode})}/>
               <TextInput style={styles.nameInput} 
              placeholder="Residential Status" 
              onChangeText={ResidentialStatus => this.setState ({ResidentialStatus})}/>
               <TextInput style={styles.nameInput} 
              placeholder="Duration" 
              onChangeText={Duration => this.setState ({Duration})}/>
               <TextInput style={styles.nameInput} 
              placeholder="Proof Of Residence" 
              onChangeText={ProofOfResidence => this.setState ({ProofOfResidence})}/>
              
               <Text style={styles.subTxt}>Emergency Contact</Text>
               <TextInput style={styles.nameInput} 
              placeholder="Name Emergency Contact" 
              onChangeText={Name => this.setState ({Name})}/>
               <TextInput style={styles.nameInput} 
              placeholder="Phone Emergency Contact" 
              onChangeText={Phone => this.setState ({Phone})}/>
               <TextInput style={styles.nameInput} 
              placeholder="Relationship" 
              onChangeText={Relationship => this.setState ({Relationship})}/>
               <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('UpdateProfile')}>
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
        fontSize: 20,
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
  