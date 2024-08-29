import Documents from "@/components/Documents";

export const dynamic = "force-dynamic";

function Dashboard() {
  return (
    <div className="h-full max-w-7xl mx-auto">
      <h1 className="text-5xl p-5 bg-gray-100 font-extralight text-indigo-600">
        My Documentssss
      </h1>

      <Documents />
    </div>
  );
}
export default Dashboard;
