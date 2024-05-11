import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Styles from "../styles/ContactModal.module.css";
import { X } from "lucide-react";
import {
  useGetSingleContactQuery,
  useUpdateContactMutation,
} from "../redux/features/contacts/contactsApi";
import toast from "react-hot-toast";

type TContactModalProps = {
  closeModal: () => void;
  itemId: string;
  setIsModalOpen: (value: boolean) => void;
};

const ContactModal = ({
  closeModal,
  itemId,
  setIsModalOpen,
}: TContactModalProps) => {
  const { data, isLoading } = useGetSingleContactQuery(itemId);
  const [updateContact] = useUpdateContactMutation();

  const { register, handleSubmit, setValue } = useForm<FieldValues>();

  if (!isLoading && data) {
    setValue("name", data?.data?.name);
    setValue("email", data?.data?.email);
    setValue("phoneNumber", data?.data?.phoneNumber);
    setValue("address", data?.data?.address);
    setValue("profilePicture", data?.data?.profilePicture);
  }

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      await updateContact({ id: itemId, data: values });
      setIsModalOpen(false);
      toast.success("Contatcs Update Successfully!", { id: "contactId" });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error("An error occurred. Please try again.", { id: "contactId" });
    }
  };

  return (
    <div>
      <div className={Styles.modalOverlay}>
        <div className={Styles.modalContent}>
          <X
            color="#fff"
            className={Styles.modalCloseBtn}
            onClick={closeModal}
          />
          <div className={Styles.ACMainContainer}>
            <h1 className="poppins-regular">Update Contacts</h1>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  autoComplete="off"
                  placeholder="Name"
                  className={Styles.CMInputContainer}
                  {...register("name")}
                />
                <div className={Styles.GridInput}>
                  <input
                    autoComplete="off"
                    placeholder="Email"
                    className={Styles.CMInputContainer}
                    {...register("email")}
                  />
                  <input
                    autoComplete="off"
                    placeholder="Phone Number"
                    className={Styles.CMInputContainer}
                    {...register("phoneNumber")}
                  />
                </div>
                <input
                  autoComplete="off"
                  placeholder="Address"
                  className={Styles.CMInputContainer}
                  {...register("address")}
                />

                <input
                  autoComplete="off"
                  placeholder="Profile Picture URL"
                  className={Styles.CMInputContainer}
                  {...register("profilePicture")}
                />
                <input type="submit" value="Update" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
