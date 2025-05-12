import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const SocialLogin = () => {
    const { singInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        singInWithGoogle()
            .then(result => {
              
            })
            .catch(error => {
               
            })
    }

    return (
        <div className='m-4'>
              <div className="divider">OR</div>

            <button onClick={handleGoogleSignIn} className='btn'>Google</button>
        </div>
    );
};

export default SocialLogin;