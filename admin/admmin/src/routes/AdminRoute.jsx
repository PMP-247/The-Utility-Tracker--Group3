import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { UserAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { session } = UserAuth();
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserRole = async () => {
      if (!session) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single();

      if (error) {
        console.error("Error fetching role:", error);
      } else {
        setRole(data.role);
      }

      setLoading(false);
    };

    getUserRole();
  }, [session]);

  if (loading) return <p>Checking admin access...</p>;

  if (!session) return <Navigate to="/signin" />;

  if (role !== "admin") return <Navigate to="/dashboard" />;

  return children;
};

export default AdminRoute;

