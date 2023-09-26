import { StudentsListItem } from './StudentsListItem';

export default {
	title: 'Components/Molecules/StudentsListItem',
	component: StudentsListItem,
};

const mockedData = {
	name: 'Adam Romański',
	attendance: '55%',
	average: '3.5',
};

const Template = args => <StudentsListItem {...args} />;

export const BadGrades = Template.bind({});
BadGrades.args = {
	userData: {
		name: 'Adam Romański',
		attendance: '55%',
		average: '2.9',
	},
};

export const MediumGrades = Template.bind({});
MediumGrades.args = {
	userData: {
		name: 'Adam Romański',
		attendance: '81%',
		average: '3.8',
	},
};

export const GoodGrades = Template.bind({});
GoodGrades.args = {
	userData: {
		name: 'Adam Romański',
		attendance: '95%',
		average: '4.6',
	},
};

export const NoAverage = Template.bind({});
NoAverage.args = {
	userData: {
		name: 'Adam Romański',
		attendance: '95%',
		average: null,
	},
};
