import { factory, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

faker.seed(2)

const groups = ['A', 'B', 'C'];
const getRandomGroup = index => groups[index];
const getRandomAverage = () => faker.number.float({ min: 2, max: 5, precision: 0.1 });
const uppercaseFirstLatter = word => word.slice(0, 1).toUpperCase() + word.slice(1);

export const db = factory({
	student: {
		id: primaryKey(faker.string.uuid),
		name: () => `${faker.person.firstName()} ${faker.person.lastName()}`,
		attendance: () => `${faker.number.int({ min: 0, max: 100 })}%`,
		average: getRandomAverage,
		group: () => getRandomGroup(faker.number.int({ min: 0, max: 2 })),
		course: () => `${uppercaseFirstLatter(faker.word.sample())} ${uppercaseFirstLatter(faker.word.sample())}`,
		grades: () => [
			{
				subject: 'Business Philosophy',
				average: getRandomAverage(),
			},
			{
				subject: 'Marketing',
				average: getRandomAverage(),
			},
			{
				subject: 'Modern Economy',
				average: getRandomAverage(),
			},
		],
	},
});
