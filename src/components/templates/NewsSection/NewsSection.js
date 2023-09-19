import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

const data = [
	{
		title: 'New computers at school',
		category: 'Tech news',
		content: `Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id
        elementum pretium aliquam. In turpis sem vestibulum ut in ut. Fringilla orci, condimentum tellus leo nunc,
        vitae eu. Diam euismod enim integer facilisi sed. Pretium hendrerit quis egestas eget at magna ac commodo
        volutpat.`,
	},
	{
		title: 'New computers at school2',
		category: 'Tech news',
		content: `Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id
        elementum pretium aliquam. In turpis sem vestibulum ut in ut. Fringilla orci, condimentum tellus leo nunc,
        vitae eu. Diam euismod enim integer facilisi sed. Pretium hendrerit quis egestas eget at magna ac commodo
        volutpat.`,
		image: 'https://unsplash.it/200/240',
	},
	{
		title: 'New computers at school3',
		category: 'Tech news',
		content: `Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id
        elementum pretium aliquam. In turpis sem vestibulum ut in ut. Fringilla orci, condimentum tellus leo nunc,
        vitae eu. Diam euismod enim integer facilisi sed. Pretium hendrerit quis egestas eget at magna ac commodo
        volutpat.`,
	},
];

export const Wrapper = styled.div`
	grid-row: 1 / 3;
	grid-column: 3 / 4;
	display: flex;
	flex-direction: column;
	padding: 32px 48px;
	border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
	overflow-y: scroll;
`;

export const NewsSectionHeader = styled.h3`
	margin-right: auto;
	margin-bottom: 24px;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const ArticleWrapper = styled(ViewWrapper)`
	margin: 0;
	margin-bottom: 40px;
	padding: 32px 40px;
	max-width: unset;
	border-radius: 10px;
	color: ${({ theme }) => theme.colors.darkGrey};

	${Button} {
		margin: 0;
	}
`;

export const TitleWrapper = styled.div`
	margin-bottom: 16px;

	h3 {
		margin-bottom: 2px;
		font-size: ${({ theme }) => theme.fontSize.l};
	}

	p {
		font-size: ${({ theme }) => theme.fontSize.m};
	}
`;

export const ContentWrapper = styled.div`
	display: flex;
    align-items: center;
    margin-bottom: 32px;

	p {
		font-size: 15px;
		line-height: 1.6;
	}

    img {
        margin-left: 32px;
        width: 160px;
        object-fit: cover;
    }
`;

export const NewsSection = () => {
	return (
		<Wrapper>
			<NewsSectionHeader>University News Feed</NewsSectionHeader>
			{data.map(({ title, category, content, image = null }) => (
				<ArticleWrapper key={title}>
					<TitleWrapper>
						<h3>{title}</h3>
						<p>{category}</p>
					</TitleWrapper>
					<ContentWrapper>
						<p>{content}</p>
						{image ? <img src={image} alt='article' /> : null}
					</ContentWrapper>
					<Button $isBig>Read more</Button>
				</ArticleWrapper>
			))}
		</Wrapper>
	);
};
