'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    setFormSubmitted(true);
    // Handle sign-up logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-lg text-black">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">Create an account</h2>
        <p className="text-gray-500 mb-6 font-thin">Enter your information to create your account</p>

        {formSubmitted ? (
          <p className="text-green-500 text-center">Thank you for signing up!</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Input */}
            <div className='text-black'>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className={`block w-full mt-1 px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{String(errors.name.message)}</p>}
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                })}
                className={`block w-full mt-1 px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                placeholder="Enter your password"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{String(errors.email?.message)}</p>}
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Password must be at least 6 characters' },
                })}
                className={`block w-full mt-1 px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                placeholder="••••••••"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{String(errors.password?.message)}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-800 text-white font-semibold py-2 rounded-md hover:bg-blue-900 transition duration-200"
            >
              Sign Up
            </button>
          </form>
        )}

        {/* Login Link */}
        <p className="text-sm text-gray-600 mt-6 text-center">
          Already have an account? <Link href="/sign-in" className="text-indigo-600 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}
