var config = {
  apiKey: "AIzaSyCcYlZfS6U1rFYkA53kosgxoSxejON7tnI",
  authDomain: "portfolio-5433f.firebaseapp.com",
  databaseURL: "https://portfolio-5433f.firebaseio.com",
  projectId: "portfolio-5433f",
  storageBucket: "portfolio-5433f.appspot.com",
  messagingSenderId: "1074864665662"
};

firebase.initializeApp(config);

let ref = firebase.database().ref('projects')

ref.on('value', snapshot => {
  console.log(snapshot.val())
})