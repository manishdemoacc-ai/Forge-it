import { useState } from "react";
import Contact from "./components/Contact";
import PolicyModal from "./components/PolicyModal";
import PrivacyPolicy from "./policies/PrivacyPolicy";
import TermsOfService from "./policies/TermsOfService";

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <header className="p-6 text-center font-bold text-xl">
        Forgeit
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Contact
          openPrivacy={() => setPrivacyOpen(true)}
          openTerms={() => setTermsOpen(true)}
        />
      </main>

      {/* Privacy Policy Modal */}
      <PolicyModal
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Privacy Policy"
      >
        <PrivacyPolicy />
      </PolicyModal>

      {/* Terms of Service Modal */}
      <PolicyModal
        open={termsOpen}
        onClose={() => setTermsOpen(false)}
        title="Terms of Service"
      >
        <TermsOfService />
      </PolicyModal>

      {/* Footer */}
      <footer className="text-center py-6 text-sm">
        <button
          onClick={() => setPrivacyOpen(true)}
          className="underline mx-2"
        >
          Privacy Policy
        </button>
        |
        <button
          onClick={() => setTermsOpen(true)}
          className="underline mx-2"
        >
          Terms of Service
        </button>
      </footer>

    </div>
  );
}
