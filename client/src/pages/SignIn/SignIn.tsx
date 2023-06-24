import { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fetchedResult, setFetchedResult] = useState<any>(null);

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (/\s/.test(username)) {
      return alert("Username cannot contain any spaces.");
    }

    try {
      const response = await fetch("http://localhost:5000/auth", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const result = await response.json();
      setFetchedResult(result.message);
      setSuccess(true);
    } catch (e: any) {
      console.log(e);
      setFetchedResult(e.message);
    }
  };

  return (
    <div className="p-16 w-[75svh]">
      <form onSubmit={handleSubmit}>
        <h1>Sign In/Sign Up</h1>
        <label className="block mt-8">
          Username:
          <input
            type="text"
            className="block border-[#ddd] border rounded-[5px] p-4 w-full"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
        </label>
        <label className="block mt-8">
          Email:
          <input
            type="email"
            className="block border-[#ddd] border rounded-[5px] p-4 w-full"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </label>
        <label className="block mt-8">
          Password:
          <input
            type="password"
            className="block border-[#ddd] border rounded-[5px] p-4 w-full"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </label>
        <button
          type="submit"
          className={`mt-8 ${
            success
              ? "bg-[rgba(0,255,0,0.3)] text-black"
              : "bg-accent text-white"
          }`}
        >
          Submit
        </button>
        {fetchedResult && <p>{fetchedResult?.message}</p>}
      </form>
    </div>
  );
}

export default SignIn;
