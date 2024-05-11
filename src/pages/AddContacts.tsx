import { FieldValues } from "react-hook-form";
import NHFormInput from "../components/Form/NHFormInput";
import NHFormProvider from "../components/Form/NHFormProvider";
import Container from "../utils/Container";
import Styles from "../styles/AddContacts.module.css";

const AddContacts = () => {
  const handleContacts = async (values: FieldValues) => {
    try {
      console.log(values);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Container>
      <div style={{ marginTop: "50px"}}>
        <div className={Styles.ACMainContainer}>
          <h1 className="poppins-regular">Add Contacts</h1>
          <NHFormProvider onSubmit={handleContacts}>
            <NHFormInput name="name" placeholder="Name" type="text" required />
            <div className={Styles.GridInput}>
              <NHFormInput name="email" placeholder="Email" type="email" required />
              <NHFormInput
                name="phoneNumber"
                placeholder="Phone Number"
                type="text"
                required
              />
            </div>
            <NHFormInput
              name="address"
              placeholder="Address"
              type="text"
              required
            />
            <NHFormInput
              name="profilePicture"
              placeholder="Profile Picture URl"
              type="text"
              required
            />
            <input className="poppins-regular" type="submit" value="Add" />
          </NHFormProvider>
        </div>
      </div>
    </Container>
  );
};

export default AddContacts;
