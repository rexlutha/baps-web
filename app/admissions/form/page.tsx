// app/admissions/form/page.tsx

import React from "react"

export default function AdmissionFormPage() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Admission Form</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="border p-2 w-full" />
        <input type="email" placeholder="Email" className="border p-2 w-full" />
        <textarea placeholder="Reason for Admission" className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  )
}
