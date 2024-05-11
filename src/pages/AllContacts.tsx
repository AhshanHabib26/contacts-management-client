import { useGetAllContactQuery } from "../redux/features/contacts/contactsApi";
import ContactCard from "../utils/ContactCard";
import Container from "../utils/Container";
import Styles from "../styles/AllContacts.module.css"

type TContact = {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  profilePicture: string;
};

const AllContacts = () => {
  const { data, isLoading } = useGetAllContactQuery("");

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <Container>
        <h1
          className="poppins-semibold"
          style={{ fontSize: "28px", color: "#101C43", marginBottom: "10px" }}
        >
          All Contacts
        </h1>
        <div className={Styles.allContactsContainer}>
          {data?.data?.map((item: TContact) => (
            <ContactCard item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllContacts;
