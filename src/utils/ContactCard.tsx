import {
  FilePenLine,
  Mail,
  MapPin,
  PhoneCall,
  Trash2,
  UserRound,
} from "lucide-react";
import Styles from "../styles/ContactCard.module.css";




const ContactCard = ({ item }) => {
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
          <FilePenLine color="#2E75DA" />
          <Trash2 color="#F74D00" style={{ marginLeft: "5px" }} />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
