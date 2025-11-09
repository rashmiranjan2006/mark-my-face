import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => (
  <div className="min-h-screen flex flex-col">
    <Navigation />
    <main className="flex-1 container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">404 - Not Found</h1>
      <p className="text-muted-foreground">The page you are looking for does not exist.</p>
    </main>
    <Footer />
  </div>
);

export default NotFound;
