import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface DownModalProps {
  showFeedback: boolean;
  openModal: () => void;
  closeModal: () => void;
  children: any;
  selectedData: any;
  selectedSlot: any;
}

const DownModal: React.FC<DownModalProps> = ({
  showFeedback,
  closeModal,
  children,
}) => {
  return (
    <div className=" container">
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={closeModal}
            className="feedback__container"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DownModal;


