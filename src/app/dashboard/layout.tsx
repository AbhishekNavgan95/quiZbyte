import Sidebar from "@/components/common/Sidebar";
import ClientProvider from "@/components/common/ClientProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[240px_1fr] h-screen">
      <ClientProvider>
        <Sidebar />
      </ClientProvider>
      <div className="overflow-y-auto bg-main-50 text-main-900 p-12">
        {children}
      </div>
    </div>
  );
}
