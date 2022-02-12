import { useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { Global, PhoneBookContainer } from './App.GlobalStyle';
import { contactsOperations, itemsSelector } from './redux';

export default function App() {
  const dispatch = useDispatch();
  const items = useSelector(itemsSelector.getItems);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Global />
      <PhoneBookContainer>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {items.length > 0 && <Filter />}
        {items.length > 0 ? <ContactList /> : <p>Your phonebook is empty</p>}
      </PhoneBookContainer>
    </>
  );
}
