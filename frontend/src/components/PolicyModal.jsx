export default function PolicyModal({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white w-[90%] max-w-3xl max-h-[80vh] rounded-xl overflow-hidden">

        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="p-6 overflow-y-auto text-sm leading-relaxed">
          {children}
        </div>

      </div>
    </div>
  );
}
