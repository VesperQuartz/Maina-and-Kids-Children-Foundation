import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Copy, X } from "lucide-react";
import { SVGUba } from "./UbaLogo";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
export function Dialog({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        ref={dialogRef}
        className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close dialog"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mb-6 flex justify-center absolute p-1 left-44 -top-10 bg-white rounded-full w-24 h-24">
          <div className="flex items-center justify-center border-black p-1 overflow-hidden rounded-full border-4">
            <SVGUba className="object-contain w-15 h-15" />
          </div>
        </div>

        <h2 className="mb-4 text-center text-2xl font-semibold mt-8">
          Make a Difference Today
        </h2>

        <p className="mb-6 text-center text-gray-600 text-xl">
          Your generosity helps us empower and build. Every contribution brings
          us closer to a brighter future.
        </p>

        <div className="mb-4 text-center flex flex-col justify-center items-center">
          <p className="text-xl font-mono font-extrabold">1025549744</p>
          <Copy
            className="cursor-pointer"
            onClick={() => {
              navigator.clipboard.readText(1025549744);
              toast.success("Account number copied to clipboard");
            }}
          />
        </div>

        <p className="mb-6 text-center text-gray-600 text-xl">
          Maina & Kids Children Foundation
        </p>

        <p className="text-center text-sm text-gray-500 text-md">
          Thank you for supporting our cause!
        </p>
      </div>
    </div>,
    document.body,
  );
}
