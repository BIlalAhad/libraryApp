import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore, addDoc, collection, getDoc,getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyBMa6HPZ4cgD-bBWF2rducoMBvTZbuKYKc",
    authDomain: "library-383d9.firebaseapp.com",
    projectId: "library-383d9",
    storageBucket: "library-383d9.appspot.com",
    messagingSenderId: "813015399675",
    appId: "1:813015399675:web:fab94b3e4b2eeb5db6445e"
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);
const storage = getStorage(FirebaseApp);

const FirebaseAuth = getAuth(FirebaseApp);
const Googleprovider = new GoogleAuthProvider();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
    const [url,setURL]=useState([]);
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, [])

    const isLoggedIn = user ? true : false;
    const HandleCreateNewListing = async (bookname, ISBN, price, img) => {
        const imageRef = ref(storage, `uploads/images/${Date.now()}${img.name}`)
        const uploadResult = await uploadBytes(imageRef, img)
        const docRef = await addDoc(collection(db, "users"), {
            bookname,
            ISBN,
            price,
            imageURL: uploadResult.ref.fullPath,
            UserId: user.uid,
            Email: user.email,
            photoURL:user.photoURL
        });
    }
    const SignupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(FirebaseAuth, email, password).then(value => { alert("successfully Signup") }).catch(err => { alert("failed") });
    }
    const SigninUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(FirebaseAuth, email, password).then(value => { alert("successfully Login") }).catch(err => { alert("failed") });
    }
    const SigninWithGoogle = () => {
        return signInWithPopup(FirebaseAuth, Googleprovider);
    }
    const listAllBooks=()=>{
        return getDocs(collection(db,'users'));
    }
    // const Getrecord=(path)=>{
    //     listAll(ref(storage,'path')).then(imgs=>{
    //         // imgs.items.forEach(val=>getDownloadURL(val).then(url=>setURL(url)))
    //     })
    //     }

   
    // const getRecords =async () => {
    //     const todoRef = collection(db, 'users');
    //     let allTodos = await getDocs(todoRef);
    // }

    return <FirebaseContext.Provider value={{ SignupUserWithEmailAndPassword, SigninUserWithEmailAndPassword, SigninWithGoogle, isLoggedIn, HandleCreateNewListing,listAllBooks }}>{props.children}</FirebaseContext.Provider>
}