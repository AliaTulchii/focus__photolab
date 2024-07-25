import { useState } from "react";
import Button from "../Button/Button";
import DownModalFeedback from "../Modals/DownModal/DownModalFeedback";
import FeedbackContent from "./FeedbackContent";


const Feedback = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  const openModal = () => {
    setShowFeedback(true);
  };

  const closeModal = () => {
    setShowFeedback(false);
  };

  return (
    <div className="start__downmodal">
      <Button
        type="button"
        className={"btn btn__feedback"}
        text={"Залишити відгук"}
        onClick={openModal}
      />
      <DownModalFeedback
        showFeedback={showFeedback}
        openModal={openModal}
        closeModal={closeModal}
      >
        <FeedbackContent closeModal={closeModal} />
      </DownModalFeedback>
    </div>
  );
};

export default Feedback;
