"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Navbar from "@/components/ui/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await submitFormHandler(formData);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      alert("Form submitted successfully!");
    } catch (err) {
      console.error("Error Submitting Form:", err);
      alert("An error occured while submitting the form. Please try again.");
    }
  };

  const submitFormHandler = async (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    const res = await fetch("example.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Server Error");
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex mt-8 justify-center">
        <h1 className="text-4xl">Contact Us</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 p-6 rounded-md shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 "
        >
          Submit
        </button>
      </form>
    </>
  );
}
