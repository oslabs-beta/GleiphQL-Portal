import { MouseEvent } from 'react'
import Login from './Login';
import Register from './Register';
import useStore from '../store';
import { PartialStore } from '../../types';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Modal = ({ open, onClose } : ModalProps) => {
  const { showLogin, showRegistration } : PartialStore = useStore();
  if (!open) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center text-black z-10'>
      <div onClick={(e: MouseEvent<HTMLElement>) : void => {e.stopPropagation()}}>
        {showLogin && !showRegistration && <Login />}
        {!showLogin && showRegistration && <Register />}  
      </div>
    </div>
  )
}

export default Modal;