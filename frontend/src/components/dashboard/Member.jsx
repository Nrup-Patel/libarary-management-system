// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_BASE_URL = "http://localhost/Library-management-system/backend/index.php";

// const Member = () => {
//   const [members, setMembers] = useState([]);
//   const [newMember, setNewMember] = useState({ name: '', email: '', phone: '' });
//   const [editingMember, setEditingMember] = useState(null);

//   useEffect(() => {
//     fetchMembers();
//   }, []);

//   const fetchMembers = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}?action=listMembers`);
//       console.log("Raw response:", response.data);
  
//       // Handle malformed response: Extract the usable part
//       const match = response.data.match(/^\[.*\]/); // Regex to match the first JSON array
//       const cleanData = match ? JSON.parse(match[0]) : [];
  
//     //   console.log("Processed members:", cleanData);
  
//       // Set members state with the usable data
//       setMembers(cleanData);
//     } catch (error) {
//       console.error("Error fetching members:", error);
//     }
//   };
  

//   const handleAddMember = async () => {
//     try {
//       await axios.post(`${API_BASE_URL}?action=addMember`, newMember, {
//         headers: { "Content-Type": "application/json" },
//       });
//       setNewMember({ name: '', email: '', phone: '' });
//       fetchMembers();
//     } catch (error) {
//       console.error("Error adding member:", error);
//     }
//   };

//   const handleUpdateMember = async () => {
//     try {
//       await axios.post(`${API_BASE_URL}?action=updateMember`, editingMember, {
//         headers: { "Content-Type": "application/json" },
//       });
//       setEditingMember(null);
//       fetchMembers();
//     } catch (error) {
//       console.error("Error updating member:", error);
//     }
//   };

//   const handleDeleteMember = async (id) => {
//     try {
//       await axios.post(
//         `${API_BASE_URL}?action=deleteMember`,
//         {data: JSON.stringify({ id })}, // Send `id` in the request body
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       fetchMembers();
//     } catch (error) {
//       console.error("Error deleting member:", error);
//     }
//   };
  

//   return (
//     <div>
//       <h1>Member Management</h1>
      
//       <h2>Members List</h2>
//       {members.map((member) => (
//         <div key={member.id}>
//           <p>{member.name} ({member.email})</p>
//           <button onClick={() => setEditingMember(member)}>Edit</button>
//           <button onClick={() => handleDeleteMember(member.id)}>Delete</button>
//         </div>
//       ))}
//       <h2>Add Member</h2>
//       <input
//         type="text"
//         placeholder="Name"
//         value={newMember.name}
//         onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={newMember.email}
//         onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Phone"
//         value={newMember.phone}
//         onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
//       />
//       <button onClick={handleAddMember}>Add Member</button>


//       {editingMember && (
//         <div>
//           <h2>Edit Member</h2>
//           <input
//             type="text"
//             value={editingMember.name}
//             onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
//           />
//           <input
//             type="email"
//             value={editingMember.email}
//             onChange={(e) => setEditingMember({ ...editingMember, email: e.target.value })}
//           />
//           <input
//             type="text"
//             value={editingMember.phone}
//             onChange={(e) => setEditingMember({ ...editingMember, phone: e.target.value })}
//           />
//           <button onClick={handleUpdateMember}>Update</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Member;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = "http://localhost/Library-management-system/backend/index.php";

const Member = () => {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState({ name: '', email: '', phone: '' });
  const [editingMember, setEditingMember] = useState(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}?action=listMembers`);
      console.log("Raw response:", response.data);

      // Handle malformed response: Extract the usable part
      const match = response.data.match(/^\[.*\]/); // Regex to match the first JSON array
      const cleanData = match ? JSON.parse(match[0]) : [];

      setMembers(cleanData);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  const handleAddMember = async () => {
    try {
      await axios.post(`${API_BASE_URL}?action=addMember`, newMember, {
        headers: { "Content-Type": "application/json" },
      });
      setNewMember({ name: '', email: '', phone: '' });
      fetchMembers();
    } catch (error) {
      console.error("Error adding member:", error);
    }
  };

  const handleUpdateMember = async () => {
    try {
      await axios.post(`${API_BASE_URL}?action=updateMember`, editingMember, {
        headers: { "Content-Type": "application/json" },
      });
      setEditingMember(null);
      fetchMembers();
    } catch (error) {
      console.error("Error updating member:", error);
    }
  };

  const handleDeleteMember = async (id) => {
    try {
      await axios.post(
        `${API_BASE_URL}?action=deleteMember`,
        { data: JSON.stringify({ id }) }, // Send `id` in the request body
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      fetchMembers();
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Member Management</h1>
      
      {/* Members List Table */}
      <h2>Members List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <th>{member.id}</th>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>
                <button onClick={() => setEditingMember(member)}>Edit</button>
                <button onClick={() => handleDeleteMember(member.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Member Form */}
      <div className="w-screen flex flex-col gap-3 items-center justify-center mt-5 bg-richblack-600">
      <h2>{editingMember ? "Edit Member" : "Add Member"}</h2>
        <div className="form-group row">
          <label htmlFor="memberName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="memberName"
              placeholder="Name"
              value={editingMember ? editingMember.name : newMember.name}
              onChange={(e) =>
                editingMember
                  ? setEditingMember({ ...editingMember, name: e.target.value })
                  : setNewMember({ ...newMember, name: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="memberEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="memberEmail"
              placeholder="Email"
              value={editingMember ? editingMember.email : newMember.email}
              onChange={(e) =>
                editingMember
                  ? setEditingMember({ ...editingMember, email: e.target.value })
                  : setNewMember({ ...newMember, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="memberPhone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="memberPhone"
              placeholder="Phone"
              value={editingMember ? editingMember.phone : newMember.phone}
              onChange={(e) =>
                editingMember
                  ? setEditingMember({ ...editingMember, phone: e.target.value })
                  : setNewMember({ ...newMember, phone: e.target.value })
              }
            />
          </div>
        </div>

        <button className="btn btn-primary" onClick={editingMember ? handleUpdateMember : handleAddMember}>
          {editingMember ? "Update Member" : "Add Member"}
        </button>
      </div>
    </div>
  );
};

export default Member;
