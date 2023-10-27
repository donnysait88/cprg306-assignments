"use client"

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Login() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen">
      
      <div className="text-2xl font-sans font-bold m-8 ">
        <h1>Welcome!!</h1>
        <h1>The Shopping List Application</h1>
      </div>

      {user ? (
        <div className="m-8">
          <div className="font-sans text-[20px]">
            <h1 className="mb-4 font-semibold">Your Information</h1>
            <b>Name : </b>{user.displayName} | <b>Email : </b>{user.email}
          </div>
          <img src={user.photoURL} alt="user avatar" className="w-30 h-40 mt-4 mb-4 rounded-lg" />
          <div className="absolute flex flex-col">
            <div className="text-lg p-4 bg-green-700 text-white rounded-lg hover:bg-green-500 mb-4 cursor-pointer">
              <Link href="./week8/shopping-list">Let go shopping .. &#127822; </Link>
            </div>
            <button
              onClick={handleSignOut}
              className="text-lg p-2 bg-red-600 text-white rounded-lg hover:bg-red-400"
            >
              Sign Out
            </button>
            <Link href="/" className="mt-8 flex justify-center font-bold font-mono">&lt;Back</Link>
          </div>
        </div>
      ) : (
        <button onClick={handleSignIn} className="text-lg ml-8 p-2 bg-green-700 text-white rounded-lg hover:bg-green-500 bg-contain">
          Sign In with Github
        </button>
      )}
    </div>
  );
}
