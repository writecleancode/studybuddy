import { Button } from 'components/atoms/Button/Button';
import { ArticleWrapper, ContentWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from './NewsSection.styles';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
						authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
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
