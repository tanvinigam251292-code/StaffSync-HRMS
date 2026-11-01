import React, { useState, useEffect } from "react";
import Announcements from "@/components/employee/Announcements";
import LeaveApply from "@/components/employee/LeaveApply";
import LeaveList from "@/components/employee/LeaveList";
import Attendance from "@/components/employee/Attendance";
import { getMyLeaves, updateMyProfile } from "../api/api";

const EmployeeDashboard = () => {
   
  const [activeTab, setActiveTab] = useState("announcements");
  const [leaves, setLeaves] = useState([]);
  const [user, setUser] = useState(() => {
  return JSON.parse(localStorage.getItem("user")) || {
    name: "",
    email: ""
  };
});
const [editName, setEditName] = useState(user.name || "");
const [editDepartment, setEditDepartment] = useState(user.department || "");

 const handleProfileUpdate = async () => {
  try {
    const res = await updateMyProfile({
      name: editName,
      department: editDepartment
    });

    setUser(res.data.user);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    alert("Profile updated successfully!");
  } catch (error) {
    alert(error.response?.data?.message || "Profile update failed");
  }
}; 
  const handleLogout = () => {
    localStorage.removeItem("token"); 
    window.location.href = "/login"; 
  };

  const fetchLeaves = async () => {
    try {
      const res = await getMyLeaves();
      setLeaves(res.data);
    } catch (err) {
      console.error("Failed to fetch leaves:", err);
    }
  };

  useEffect(() => {
    if (activeTab === "leaves") {
      fetchLeaves();
    }
  }, [activeTab]);

  const handleLeaveApplied = () => {
    fetchLeaves();
  };

  const renderContent = () => {
    switch (activeTab) {
      case "announcements":
        return <Announcements />;
      case "leaves":
        return (
          <div className="space-y-6">
            <LeaveApply onApplied={handleLeaveApplied} />
            <LeaveList leaves={leaves} />
          </div>
        );
      case "attendance":
        return <Attendance />;
     case "profile":
  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5 shadow-lg">
      <h2 className="text-lg font-semibold text-white mb-4">
        My Profile
      </h2>

      <div className="space-y-4 text-slate-300">

        {/* Name */}
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="w-full p-2 rounded bg-slate-700 text-white"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={user.email || ""}
            readOnly
            className="w-full p-2 rounded bg-slate-700 text-gray-400"
          />
        </div>

        {/* Department */}
        <div>
          <label className="block mb-1">Department</label>
          <input
            type="text"
            value={editDepartment}
            onChange={(e) => setEditDepartment(e.target.value)}
            className="w-full p-2 rounded bg-slate-700 text-white"
          />
        </div>

        {/* Role */}
        <p>Role: {user.role || "Employee"}</p>

        {/* Save Button */}
        <button
          onClick={handleProfileUpdate}
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
        >
          Save Profile
        </button>

      </div>
    </div>
  );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      
      <nav className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-semibold text-white tracking-wide">Employee Portal</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLogout}
            className="bg-rose-600 hover:bg-rose-700 transition-colors text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="px-6 py-8 max-w-6xl mx-auto">
        <div className="flex space-x-3 border-b border-slate-700 mb-6 overflow-x-auto">
          {[
            { id: "announcements", label: "Announcements" },
            { id: "leaves", label: "Leaves" },
            { id: "attendance", label: "Attendance" },
            { id: "profile", label: "Profile" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? "bg-slate-800 text-white border-b-2 border-rose-500"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;