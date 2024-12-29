interface HeaderCenterModalInterface {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode;
}
export function HeaderCenterModal({ isOpen, onClose, children }: HeaderCenterModalInterface) {
  if (!isOpen) {
    return null
  }

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10" onClick={handleOverlayClick}>
      <div className="bg-white rounded-lg px-6 pt-6 max-w-sm w-full relative" onClick={handleModalClick}>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl"
          onClick={onClose}
        > &times;
        </button>
        {children}
      </div>
    </div>
  )
}
