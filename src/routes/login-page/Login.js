import React, {useState} from 'react'
import './Login.css'
import { auth } from '../../server/firabase'
import { useStateValue } from '../../context/stateprovider/StateProvider';
function Login() {
    const [{user}, dispatch] = useStateValue();
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");  
    
    const registrUser = (e) => {
        auth.createUserWithEmailAndPassword (email, password)
        .then(user => {
            if(user) {
                dispatch({
                    type: "REGISTER_USER",
                    user: user.email
                })
            }
        })
        
        .catch(error => console.log(error));
        e.preventDefault(user);
    }
             const signInUser = (e) => {
         auth.signInWithEmailAndPassword(email, password)
         .then(user => {
             if(user){
                 dispatch({
                     type: "SIGN_IN_USER",
                     user: user.email
                 })
             }
             
         })
         .catch(error => console.log(error)); 
         e.preventDefault();
     }
      
    return (
        <div className="login">
           <form>
               <input type="email" placeholder="Username or email" value={email} onChange={(e) => setEmail(e.target.value)}/>
               <input type="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
               <button onClick={registrUser}>Create User</button>
               <button onClick={signInUser}>Sig In Sign</button>
           </form>
        </div>
    )
}

export default Login
