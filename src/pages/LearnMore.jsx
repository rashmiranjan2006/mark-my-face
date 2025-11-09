import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const LearnMore = () => (
  <div className="min-h-screen flex flex-col">
    <Navigation />
    <main className="flex-1 container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Learn More</h1>
      <p className="text-muted-foreground">Learn more page placeholder.</p>
    </main>
    <Footer />
  </div>
);

export default LearnMore;
