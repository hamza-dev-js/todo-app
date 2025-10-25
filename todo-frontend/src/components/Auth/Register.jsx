import { useState } from "react";
import api from "../../services/api";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", { username, password });
      alert("Registration successful, please login now");
      setUsername(""); setPassword("");
    } catch (err) {
      alert(err?.response?.data?.message || "Error");
    }
  };

  return (
    <form onSubmit={submit} className="space-y-3">
      <h3 className="text-lg font-semibold">Register</h3>
      <input
       className="w-full border rounded-lg p-2"
       placeholder="Username"
       value={username} 
       onChange={e => setUsername(e.target.value)} 
       />
      <input 
      className="w-full border rounded-lg p-2"
      placeholder="Password"
      type="password" 
      value={password} 
      onChange={e => setPassword(e.target.value)} 
      />
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Register</button>
    </form>
  );
}
export default Register;
