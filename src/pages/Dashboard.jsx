import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Dashboard = () => (
  <div className="min-h-screen flex flex-col">
    <Navigation />
    <main className="flex-1 container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-muted-foreground">Dashboard content will be migrated from TypeScript.</p>
    </main>
    <Footer />
  </div>
);

export default Dashboard;
