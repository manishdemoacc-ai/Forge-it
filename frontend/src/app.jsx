import { useState } from "react";
import PolicyModal from "./components/PolicyModal";
import PrivacyPolicy from "./policies/PrivacyPolicy";
import TermsOfService from "./policies/TermsOfService";

function App() {
  // ✅ STATE (Correct place)
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <div className="min-h-screen">

      {/* 🔹 Your existing site content */}
      <header>Header</header>
      <main>Main content</main>

      {/* ✅ PRIVACY POLICY MODAL */}
      <PolicyModal
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Privacy Policy"
      >
        <PrivacyPolicy />
      </PolicyModal>

      {/* ✅ TERMS OF SERVICE MODAL */}
      <PolicyModal
        open={termsOpen}
        onClose={() => setTermsOpen(false)}
        title="Terms of Service"
      >
        <TermsOfService />
      </PolicyModal>

      {/* 🔹 Footer example */}
      <footer className="text-center py-6">
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
  <Contact
  openPrivacy={() => setPrivacyOpen(true)}
  openTerms={() => setTermsOpen(true)}
/>


    </div>
  );
}

export default App;
