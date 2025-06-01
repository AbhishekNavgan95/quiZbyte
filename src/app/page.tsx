import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen max-h-screen bg-gradient-to-br from-sky-900 via-sky-800 to-sky-950 text-white flex flex-col justify-center items-center px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 text-white ">Welcome to QuizByte</h1>
        <p className="text-xl text-main-200">
          The ultimate platform for organizations to host online test series for students.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Link href="/signup" className="w-full">
          <div className="bg-white text-sky-950 p-8 rounded-md shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col items-center justify-between border border-sky-200">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">New here?</h2>
            <p className="mb-6 text-center text-sky-700">Create an account and get started with your online exams today.</p>
            <Button className="w-full bg-sky-400 hover:bg-sky-500 text-white">Sign Up</Button>
          </div>
        </Link>

        <Link href="/login" className="w-full">
          <div className="bg-white text-sky-950 p-8 rounded-md shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col items-center justify-between border border-sky-200">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Already a member?</h2>
            <p className="mb-6 text-center text-sky-700">Log in to continue your test journey on QuizByte.</p>
            <Button className="w-full bg-sky-400 hover:bg-sky-500 text-white">Login</Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
