import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface ValidationErrors {
  email?: string[];
  password?: string[];
}

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [loginError, setLoginError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoginError("");

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });

      // ✅ Handle success
      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } catch (err: any) {
      // Laravel validation or authentication errors
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else if (err.response?.data?.message) {
        setLoginError(err.response.data.message);
      } else {
        setLoginError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="space-y-4 max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Login
      </h2>

      {loginError && (
        <div className="bg-red-100 text-red-700 p-3 rounded-md text-center">
          {loginError}
        </div>
      )}

      <form onSubmit={submit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block font-bold text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mt-1 block w-full border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md p-2`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block font-bold text-gray-700">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`mt-1 block w-full border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md p-2`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password[0]}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>

      {/* Register Link */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
          </p>
      </form>
    </div>  
  );
}