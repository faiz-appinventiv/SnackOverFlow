import database from '@react-native-firebase/database';

const storeUserData=()=>{

database()
  .ref('/users/123')
  .set({
    name: 'Ada Lovelace',
    age: 31,
  })
  .then(() => console.log('Data set.'));
}

export default {storeUserData}