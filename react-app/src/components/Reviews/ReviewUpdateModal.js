import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import ReviewUpdate from "./ReviewUpdate";



function ReviewUpdateModal({review}) {
  const [showModal, setShowModal] = useState(false);

  
  return (
    <>
      <button className="update_review_modal_button" onClick={() => setShowModal(true)}>
        Edit Review
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <ReviewUpdate setShowModal={setShowModal} review={review} />
        </Modal>
      )}
    </>
  );
}

export default ReviewUpdateModal;