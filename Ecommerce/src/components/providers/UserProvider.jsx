import { useEffect, useState } from 'react'
import UserContext from '../context/UserContext'


const UserProvider = ({children}) => {

    const [user, set] = useState(null);
    const access = function(username, password){
        fetch()
    }

    const save = function(){
        fetch()
    }

    return ( 
           <UserContext.Provider value={{}}>{children}</UserContext.Provider>
     );
}
 
export default UserProvider;


