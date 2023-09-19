import { Button } from 'components/atoms/Button/Button';
import { ArticleWrapper, ContentWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from './NewsSection.styles';

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
