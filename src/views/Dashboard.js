import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersList } from 'components/organisms/UsersList/UsersList';

export const Dashboard = () => {
	return (
		<ViewWrapper>
			<UsersList />
		</ViewWrapper>
	);
};
