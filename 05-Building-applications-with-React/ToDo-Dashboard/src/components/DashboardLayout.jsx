import DashboardHeader from "./DashboardHeader.jsx";
import DashboardShell from "./DashboardShell.jsx";
import TodoSection from "./TodoSection.jsx";

function DashboardLayout() {
  return (
    <DashboardShell>
      <div className="dashboard">
        <div className="dashboard-stack">
          <DashboardHeader />
          <TodoSection />
        </div>
      </div>
    </DashboardShell>
  );
}

export default DashboardLayout;
