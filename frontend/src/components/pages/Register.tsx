import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface ValidationErrors {
  name?: string[];
  email?: string[];
  password?: string[];
  confirmPassword?: string[];
}

export default function Register() {
  const navigator = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({});

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({}); // clear previous errors

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register", {
        name,
        email,
        password,
        confirmPassword,
      });

      // ✅ Handle successful registration
      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("isAuthenticated", "true");
      navigator("/dashboard");
    } catch (err: any) {
      // ✅ Handle validation errors from backend
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        console.error("Registration failed:", err);
      }
    }
  };

  return (
    <div className="space-y-4 max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Register
      </h2>

      <form onSubmit={submit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-bold text-gray-700">Name</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`mt-1 block w-full border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md p-2`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>
          )}
        </div>

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

        {/* Confirm Password */}
        <div>
          <label className="block font-bold text-gray-700">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`mt-1 block w-full border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } rounded-md p-2`}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword[0]}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>
         {/* Login Link */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
