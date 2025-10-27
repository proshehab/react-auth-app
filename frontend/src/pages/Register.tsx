import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password, confirmPassword });
  }

  return (
    <>
          <div className="space-y-4 max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Register</h2>
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block font-bold text-gray-700">Name</label>
                <input
                  id='neme'
                  name="name"
                  value ={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your name"
                />
              </div>
               <div>
                <label className="block font-bold text-gray-700">Email</label>
                <input
                  id ='email'
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your email"
                />
              </div>
               <div>
                <label className="block font-bold text-gray-700">Password</label>
                <input
                  id='password'
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your password"
                />
              </div>
               <div>
                <label className="block font-bold text-gray-700">Confirm Password</label>
                <input
                  id='confirmPassword'
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Confirm your password"
                />
              </div>
           
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Register
            </button>

               <div className="flex items-center justify-between mt-4">
          </div>
           </form>
          </div>
        </>
      );
}