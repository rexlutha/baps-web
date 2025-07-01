// app/academics/page.tsx

import { Footer } from "@/components/layout/footer";
import { AcademicsSection } from "@/components/sections/academic-section";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1">
        <AcademicsSection />
      </main>
      <Footer />
    </div>
  );
}
