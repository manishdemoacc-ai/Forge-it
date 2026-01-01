export default function Contact({ openPrivacy, openTerms }) {
  return (
    <section className="py-20 px-4">
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
            rows={4}
            required
            className="w-full border rounded px-4 py-2"
          />

          {/* Mandatory Checkbox */}
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" required className="mt-1" />
            <span>
              I agree to the{" "}
              <button
                type="button"
                onClick={openPrivacy}
                className="underline text-blue-600"
              >
                Privacy Policy
              </button>{" "}
              and{" "}
              <button
                type="button"
                onClick={openTerms}
                className="underline text-blue-600"
              >
                Terms of Service
              </button>
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}
