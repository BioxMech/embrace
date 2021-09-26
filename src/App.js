import './App.css';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from './util/firebase';

function App() {


  async function handleButton(e) {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="App">
      <input type="button" onClick={handleButton} value="Firebase Push" />
    </div>
  );
}

export default App;
