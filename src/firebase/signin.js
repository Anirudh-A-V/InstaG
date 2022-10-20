import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

import { auth } from "./config";

const provider = new GoogleAuthProvider();
const signin = signInWithRedirect(auth, provider);

export default signin;

