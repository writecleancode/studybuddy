import { configureStore, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { v4 as uuid } from 'uuid';

const initialNotesState = [];

const notesApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: '/',
	}),
	endpoints: builder => ({
		getNotes: builder.query({
			query: () => 'notes',
		}),
	}),
});

export const { useGetNotesQuery } = notesApi;

const notesSlice = createSlice({
	name: 'notes',
	initialState: initialNotesState,
	reducers: {
		addNote(state, action) {
			state.push({
				id: uuid(),
				...action.payload,
			});
		},
		removeNote(state, action) {
			return state.filter(note => note.id !== action.payload.id);
		},
	},
});

export const { addNote, removeNote } = notesSlice.actions;

export const store = configureStore({
	reducer: {
		[notesApi.reducerPath]: notesApi.reducer,
		notes: notesSlice.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(notesApi.middleware),
});
