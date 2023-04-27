import { useState } from 'react';
import { Question } from './question';
import { addQuestion } from './add_question';

const Post = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const question: Question = await addQuestion(title, content);
		console.log('Added question:', question);
		setTitle('');
		setContent('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="title">Title:</label>
				<input
					type="text"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="content">Content:</label>
				<textarea
					id="content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
			</div>
			<button type="submit">Post</button>
		</form>
	);
};

export default Post;
