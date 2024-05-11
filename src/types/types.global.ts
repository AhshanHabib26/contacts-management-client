export type TContact = {
  _id: string;
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  profilePicture: string;
  isFavorite: boolean;
};

export type TInputProps = {
  name: string;
  type?: string;
  placeholder?: string;
};
