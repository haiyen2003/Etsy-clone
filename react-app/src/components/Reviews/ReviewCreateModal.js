import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import ReviewCreate from "./ReviewCreate";



function ReviewCreateModal({ review }) {
const [showModal, setShowModal] = useState(false);


 

  return (
    <>
      <button
        className="create_review_modal_button"
        onClick={() => setShowModal(true)}
      >
        Write a Review
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewCreate setShowModal={setShowModal} review={review} />
        </Modal>
      )}
    </>
  );
}

export default ReviewCreateModal;
