// app/contact/page.tsx
import { ContactSection } from "@/components/sections/contact-section";

import { Footer } from "@/components/layout/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
