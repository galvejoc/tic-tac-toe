import { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { HelpModal } from "./help-modal";

export function ButtonHelp() {
  const [isHelpModalOpen, setHelpModalOpen] = useState<boolean>(false)
  const openHelpModal = () => setHelpModalOpen(true);
  const closeHelpModal = () => setHelpModalOpen(false);
  return (
    <>
      <button onClick={openHelpModal} className="hover:animate-pulse">
        <FaQuestion size={24} style={{ color: '#3B82F6' }} />
      </button>
      <HelpModal isHelpModalOpen={isHelpModalOpen} closeHelpModal={closeHelpModal} />
    </>
  )
}
