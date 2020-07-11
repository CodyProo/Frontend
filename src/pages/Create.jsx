import React from 'react';
import CKeditor from 'ckeditor4-react';
import Axios from 'axios';
import Login from './Login';

const Create = ({ history }) => {
	const [Data, ChangeData] = React.useState(
		'<p>Please Enter Your Data Please ...</p>'
	);

	const [Title, ChangeTitle] = React.useState('');

	const ImageRefrence = React.useRef();
	const OpenDialog = () => {
		ImageRefrence.current.click();
	};

	const clickHandler = (event) => {
		event.preventDefault();
		const formdata = new FormData();
		formdata.append('title', Title);
		formdata.append('description', Data);
		formdata.append('profile', ImageRefrence.current.files[0]);
		Axios.post('https://mysterious-journey-85780.herokuapp.com/api', formdata)
			.then(() => {
				alert('your blog create successfully');
				history.push('/');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Login>
			<div className='container my-5 py-5'>
				<h1>Please Think About That Then Create Your Own Blog Nima Jun </h1>
				<form action=''>
					<div className='my-5'>
						<label>Title</label>
						<input
							onChange={(e) => ChangeTitle(e.target.value)}
							type='text'
							className='form-control'
						/>
					</div>
					<div className='my-5'>
						<label>Description</label>
						<CKeditor
							data={Data}
							config={{ height: 600 }}
							onChange={(event) => ChangeData(event.editor.getData())}
						/>
					</div>
					<div className='w-100 d-flex justify-content-between align-items-center'>
						<button
							type='button'
							onClick={OpenDialog}
							className='btn btn-primary px-5'>
							Image
						</button>
						<input type='file' hidden ref={ImageRefrence} />
						<button onClick={clickHandler} className='btn btn-primary px-5'>
							Create
						</button>
					</div>
				</form>
			</div>
		</Login>
	);
};

export default Create;
