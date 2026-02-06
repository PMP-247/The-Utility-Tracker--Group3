import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const AdminPanel = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComplaints = async () => {
      const { data, error } = await supabase
        .from("complaints")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Admin fetch error:", error);
      } else {
        setComplaints(data);
      }

      setLoading(false);
    };

    fetchComplaints();
  }, []);

  if (loading) return <p>Loading admin complaints...</p>;

  return (
    <div>
      <h1>ADMIN DASHBOARD</h1>

      {complaints.map((complaint) => (
        <div
          key={complaint.id}
          style={{
            border: "2px solid black",
            padding: "12px",
            marginBottom: "12px",
          }}
        >
          <h3>{complaint.title}</h3>
          <p>{complaint.description}</p>
          <p><strong>Category:</strong> {complaint.category}</p>
          <p><strong>Status:</strong> {complaint.status}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
