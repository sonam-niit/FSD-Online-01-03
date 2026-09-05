import { createPortal } from "react-dom";

export default function ModalContent({ onClose }: {onClose: ()=> void}) {
  return createPortal(
    <div className="modal">
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById('modal-root')!
  )
}