import { Button } from 'components/atoms/Button/Button';
import { ArticleWrapper, ContentWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from './NewsSection.styles';
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_TOKEN = 'da4e120f3de32f16d2570730ea60a2';

export const NewsSection = () => {
	const [articles, setArticles] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		axios
			.post(
				'https://graphql.datocms.com/',
				{
					query: `
					{
					allArticles {
						id
						title
						category
						content
						image {
							url
						}
					}
				}
			`,
				},
				{
					headers: {
						authorization: `Bearer ${API_TOKEN}`,
					},
				}
			)
			.then(({ data: { data } }) => {
				setArticles(data.allArticles);
			})
			.catch(() => {
				setError("Sorry, we couldn't load the articles for you");
			});
	}, []);

	return (
		<Wrapper>
			<NewsSectionHeader>University News Feed</NewsSectionHeader>
			{articles.length ? (
				articles.map(({ title, category, content, image = null }) => (
					<ArticleWrapper key={title}>
						<TitleWrapper>
							<h3>{title}</h3>
							<p>{category}</p>
						</TitleWrapper>
						<ContentWrapper>
							<p>{content}</p>
							{image ? <img src={image.url} alt='article' /> : null}
						</ContentWrapper>
						<Button $isBig>Read more</Button>
					</ArticleWrapper>
				))
			) : (
				<NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
			)}
		</Wrapper>
	);
};
