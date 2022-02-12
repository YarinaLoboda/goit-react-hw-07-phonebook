import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';
import { changeFilter } from './actions';

export const itemReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,

  [addContact.fulfilled]: (state, { payload }) => [...state, payload],

  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
});

export const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [addContact.pending]: () => true,
  [deleteContact.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [addContact.fulfilled]: () => false,
  [deleteContact.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.rejected]: () => false,
});

export const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { action }) =>
    alert('Fetch contact error: ', action.payload),
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_, { action }) =>
    alert('Add contact error: ', action.payload),
  [addContact.pending]: () => null,
  [deleteContact.rejected]: (_, { action }) =>
    alert('Delete contact error: ', action.payload),
  [deleteContact.pending]: () => null,
});

export const rootReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
  isLoading,
  error,
});
