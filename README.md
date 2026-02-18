*Utility Tracker: Citizen Reporting Dashboard*
A real-time web application built with the MERN stack (focusing on React and Supabase) that empowers citizens to report and monitor utility service disruptions. This tool provides instant visibility into "water shedding," power outages, and infrastructure damage like potholes or burst pipes.

*Key Features*
Real-Time Dashboard: Powered by Supabase Realtime, the dashboard updates instantly when a new report is filed or a status changes.

Public Reporting: Users can quickly submit reports for specific categories (Water, Electricity, Infrastructure).

Secure Authentication: User accounts managed via Supabase Auth for tracking and managing personal reports.

Status Monitoring: Track the lifecycle of a report from "Pending" to "In Progress" and "Resolved."

Vite-Powered Frontend: Ultra-fast development and optimized production builds.

*Tech Stack*
Frontend: React 19, Vite, Tailwind CSS

Backend/Database: Supabase (PostgreSQL)

Authentication: Supabase Auth

Routing: React Router v7

Deployment: Vercel

*Project Structure*

our-app/
├── src/
│   ├── components/
│   │   ├── QuickReport/    # Modular reporting components
│   │   └── AuthForm.jsx    # Supabase Auth integration
│   ├── supabaseClient.js   # Client configuration
│   └── App.jsx             # Main routing and logic
├── vercel.json             # Vercel SPA routing rules
└── package.json            # Dependencies and scripts

Environment VariablesTo run this project locally or on Vercel, you must set the following variables:
VariableDescription :
VITE_SUPABASE_URL 
Your Supabase Project URL 
VITE_SUPABASE_ANON_KEY

Workflow: The "Feature Branch" Model
We use a structured branching strategy to avoid breaking the main production code.

Sync with the team: Before starting, pull the latest changes from the shared development branch
