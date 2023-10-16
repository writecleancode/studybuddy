import { setupWorker } from 'msw';
import { handlers } from './handlers';
import { db } from './db';

export const worker = setupWorker(...handlers);

const seed = () => {
	db.group.create({ id: 'A' });
	db.group.create({ id: 'B' });
	db.group.create({ id: 'C' });

	db.teacher.create();

	db.note.create();
	db.note.create();

	for (let i = 0; i < 16; i++) {
		db.student.create();
		db.event.create();
	}
};

seed();

window.mocks = {
	seed,
	getStudents: () => db.student.getAll(),
	getEvents: () => db.event.getAll(),
	getGroups: () => db.group.getAll(),
};
