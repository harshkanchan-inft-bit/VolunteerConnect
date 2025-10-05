// src/pages/Apply.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Apply() {
  const { id } = useParams();
    const [form, setForm] = useState({ name: "", email: "" });

      const handleChange = (e) => {
          setForm({ ...form, [e.target.name]: e.target.value });
            };

              const handleSubmit = (e) => {
                  e.preventDefault();
                      alert(`Thank you ${form.name}, you have applied for event ID: ${id}`);
                        };

                          return (
                              <div>
                                    <h1 className="text-2xl font-bold mb-4">Apply to Volunteer</h1>
                                          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                                                  <input
                                                            type="text"
                                                                      name="name"
                                                                                placeholder="Your Name"
                                                                                          value={form.name}
                                                                                                    onChange={handleChange}
                                                                                                              className="border p-2 w-full rounded"
                                                                                                                        required
                                                                                                                                />
                                                                                                                                        <input
                                                                                                                                                  type="email"
                                                                                                                                                            name="email"
                                                                                                                                                                      placeholder="Your Email"
                                                                                                                                                                                value={form.email}
                                                                                                                                                                                          onChange={handleChange}
                                                                                                                                                                                                    className="border p-2 w-full rounded"
                                                                                                                                                                                                              required
                                                                                                                                                                                                                      />
                                                                                                                                                                                                                              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                                                                                                                                                                                                                                        Submit Application
                                                                                                                                                                                                                                                </button>
                                                                                                                                                                                                                                                      </form>
                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                            export default Apply;
