// Firebase Configuration - Developed by Eng. Abdel Nasser
const firebaseConfig = {
  apiKey: "AIzaSyARFFCmCE76J9bGeZqzBBrsBDHeIBI3RT8",
  authDomain: "asu-sport-science.firebaseapp.com",
  projectId: "asu-sport-science",
  storageBucket: "asu-sport-science.firebasestorage.app",
  messagingSenderId: "303252122675",
  appId: "1:303252122675:web:2865bfa8732b1e05254746",
  measurementId: "G-MEL24095E3"
};

// Initialize Firebase Modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Initialize Firebase App and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle the Upload Form
const uploadForm = document.getElementById('uploadForm');

if (uploadForm) {
    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get data from input fields
        const title = e.target.elements[0].value;
        const videoUrl = e.target.elements[1].value;
        const driveUrl = e.target.elements[2].value;

        try {
            // Add a new document to "lectures" collection
            await addDoc(collection(db, "lectures"), {
                title: title,
                videoUrl: videoUrl,
                driveUrl: driveUrl,
                timestamp: serverTimestamp()
            });
            
            alert('Success! Content Published to Video Library.');
            e.target.reset(); // Clear the form
        } catch (error) {
            console.error("Firebase Error: ", error);
            alert('Error! Check your Firestore Rules in Firebase Console.');
        }
    });
}
