export default function Contact({ openPrivacy, openTerms }) {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Contact Us
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border rounded px-4 py-2"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border rounded px-4 py-2"
          />

          <textarea
            placeholder="Your Message"
            required
            rows={4}
            className="w-full border rounded px-4 py-2"
          />

          {/* ✅ MANDATORY CHECKBOX */}
          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              required
              className="mt-1"
            />

            <span>
              I agree to the{" "}
              <button
                type="button"
                onClick={openPrivacy}
                className="underline hover:text-blue-600"
              >
                Privacy Policy
              </button>{" "}
              and{" "}
              <button
                type="button"
                onClick={openTerms}
                className="underline hover:text-blue-600"
              >
                Terms of Service
              </button>
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:opacity-90"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}
