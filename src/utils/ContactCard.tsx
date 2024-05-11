import {
  FilePenLine,
  Heart,
  Mail,
  MapPin,
  PhoneCall,
  Trash2,
  UserRound,
} from "lucide-react";
import Styles from "../styles/ContactCard.module.css";
import { useState } from "react";
import ContactModal from "./ContactModal";
import { TContact } from "../pages/AllContacts";
import {
  useDeleteContactMutation,
  useFavoriteContactMutation,
} from "../redux/features/contacts/contactsApi";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

interface IContactCardProps {
  item: TContact;
}

const ContactCard = ({ item }: IContactCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState("");
  const [deleteContact] = useDeleteContactMutation();
  const [favoriteContact] = useFavoriteContactMutation();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEditButton = (id: string) => {
    setSelectedItemId(id);
    setIsModalOpen(true);
  };

  const handleDeleteButton = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No, Cancel!",
      confirmButtonText: "Yes, Delete!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteContact(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error",
        });
      }
    });
  };

  const handleFavoriteButton = async (id: string) => {
    try {
      if (item.isFavorite) {
        return toast.error("This contact is already a favorite!");
      } else {
        const res = await favoriteContact(id).unwrap();
        toast.success(res.message, { id: "contactId" });
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className={Styles.contactCardContainer}>
      <div>
        <img src={item.profilePicture} alt="Profile Image" />
      </div>
      <div className={Styles.CCInfoContainer}>
        <div className={Styles.CCItemWrapper}>
          <UserRound size={20} />
          <h1 className="poppins-regular">{item.name}</h1>
        </div>
        <div className={Styles.CCItemWrapper}>
          <Mail size={20} />
          <p className="poppins-regular">{item.email}</p>
        </div>
        <div className={Styles.CCItemWrapper}>
          <PhoneCall size={20} />
          <p className="poppins-regular">{item.phoneNumber}</p>
        </div>
        <div className={Styles.CCItemWrapper}>
          <MapPin size={20} />
          <p className="poppins-regular">{item.address}</p>
        </div>
        <div className={Styles.CCBtnContainer}>
          <Heart
            onClick={() => handleFavoriteButton(item._id)}
            className={Styles.iconCursor}
            fill={item.isFavorite ? "#F31B16" : "#fff"}
            style={{ color: item.isFavorite ? "#F31B16" : "" }}
          />
          <FilePenLine
            className={Styles.iconCursor}
            onClick={() => handleEditButton(item._id)}
            color="#2E75DA"
            style={{ margin: "0 5px" }}
          />
          <Trash2
            className={Styles.iconCursor}
            onClick={() => handleDeleteButton(item._id)}
            color="#F74D00"
          />
        </div>
      </div>
      {isModalOpen && (
        <ContactModal
          closeModal={closeModal}
          itemId={selectedItemId}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default ContactCard;
