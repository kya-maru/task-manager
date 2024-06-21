import React from "react";

function Home() {
  return (
    <div>
			<SignInButton />
    </div>
  );
}

export default Home;

// Googleでサインイン
function SignInButton() {
	const signInWithGoogle = () => {
		// firebaseを使ってGoogleでサインインする
	};

	return (
		<button onClick={signInWithGoogle}>
			<p>Googleでサインイン</p>
		</button>
	);
}