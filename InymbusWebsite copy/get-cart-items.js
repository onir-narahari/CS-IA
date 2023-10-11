import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { getFirestore, collection, doc, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js"";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB9Zeozd3NMXBemFWLOnLYAOLLJdSeszXY",
  authDomain: "cs-sign-up.firebaseapp.com",
  databaseURL: "https://cs-sign-up-default-rtdb.firebaseio.com",
  projectId: "cs-sign-up",
  storageBucket: "cs-sign-up.appspot.com",
  messagingSenderId: "930023154030",
  appId: "1:930023154030:web:babc491f3e46f7095ea17f",
  measurementId: "G-V07C9L6HNC"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function to retrieve the user's cart items
async function getCartItems() {
  try {
    // Retrieve the user's UID from Firebase Authentication
    const user = auth.currentUser;
    const userId = user.uid;

    // Access the Firestore database and navigate to the user's document using the UID
    const userDocRef = doc(db, 'users', userId);

    // In the user's document, access the "cart" subcollection
    const cartCollectionRef = collection(userDocRef, 'cart');

    // Retrieve the documents within the "cart" subcollection to get the cart items
    const querySnapshot = await getDocs(cartCollectionRef);

    const cartItems = [];
    querySnapshot.forEach((doc) => {
      const itemData = doc.data();
      cartItems.push({
        ProductID: itemData.ProductID,
        Name: itemData.Name,
        Price: itemData.Price
      });
    });

    return cartItems;
  } catch (error) {
    console.error('Error retrieving cart items:', error);
    return [];
  }
}

export { getCartItems };
