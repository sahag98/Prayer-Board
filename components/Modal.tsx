import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Dispatch, SetStateAction } from "react";

const Modal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AlertDialog>
      <div className="mx-5">
        <AlertDialogContent className="bg-secondary rounded-md w-5/6">
          <AlertDialogHeader>
            <AlertDialogDescription className="text-left">
              Please Wait...
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </div>
    </AlertDialog>
  );
};

export default Modal;
