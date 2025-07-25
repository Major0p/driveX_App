import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="mt-15">
      <h2 className="drivex text-3xl font-bold mb-5">DriveX</h2>
      <p className=""> <span className="font-bold text-xl">404.</span> That’s an error.</p>
      <p className="">The requested URL was not found on this server. <span className="text-gray-400">That’s all we know.</span></p>
      </div>
    </div>
  );
}
