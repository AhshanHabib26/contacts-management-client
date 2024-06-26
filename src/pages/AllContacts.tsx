import { useGetAllContactQuery } from "../redux/features/contacts/contactsApi";
import ContactCard from "../utils/ContactCard";
import Container from "../utils/Container";
import Styles from "../styles/AllContacts.module.css";
import Loader from "../components/Loader";
import { TContact } from "../types/types.global";


const AllContacts = () => {
  const { data, isLoading } = useGetAllContactQuery("");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div style={{ margin: "30px 0px" }}>
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
