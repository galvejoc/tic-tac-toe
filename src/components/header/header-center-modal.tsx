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
    <div
      style={{ boxShadow: 'inset -1px -4px 80px rgba(125, 166, 232, 0.8)' }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
      onClick={handleOverlayClick}>
      <div
        style={{ boxShadow: 'inset -1px -4px 12px rgba(125, 166, 232, 0.5)' }}
        className="bg-white rounded-lg px-6 pt-6 max-w-sm w-full relative"
        onClick={handleModalClick}>
        <button
          className="absolute top-4 right-3 text-gray-500 hover:text-gray-700 text-3xl hover:animate-pulse"
          onClick={onClose}
        > &times;
        </button>
        {children}
      </div>
    </div>
  )
}
