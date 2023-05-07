import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="p-16 w-[75svh]">
      <h1>Sign In/Sign Up</h1>
      <label className="block mt-8">
        Email:
        <input
          type="email"
          className="block border-[#ddd] border rounded-[5px] p-4 w-full"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label className="block mt-8">
        Password:
        <input
          type="password"
          className="block border-[#ddd] border rounded-[5px] p-4 w-full"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      <button className="mt-8 bg-accent text-white">Submit</button>
    </div>
  );
}

export default SignIn;
