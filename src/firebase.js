import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

let provider;
const firebaseConfig = {
    apiKey: "AIzaSyAJHEDHdMVeKRXUs7eEuVRaMhcgkRLBcpM",
    authDomain: "online-shop-8cc24.firebaseapp.com",
    databaseURL: "https://online-shop-8cc24.firebaseio.com",
    projectId: "online-shop-8cc24",
    storageBucket: "online-shop-8cc24.appspot.com",
    messagingSenderId: "102014326832",
    appId: "1:102014326832:web:ec1b7ee8da72f7c26a35f5",
    measurementId: "G-BSGJC0B7BB"
};
class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig)
		this.auth = app.auth()
		this.db = app.firestore()

	}
	

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}


	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

}

export default new Firebase()