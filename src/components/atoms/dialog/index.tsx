import ReactDOM from "react-dom"

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  children,
}: DialogProps) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-background relative w-full max-w-md rounded-lg p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}
