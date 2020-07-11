import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Login from './Login';

const Single = () => {
	const params = useParams();
	const [Data, SetData] = React.useState(null);

	useEffect(() => {
		Axios(`https://mysterious-journey-85780.herokuapp.com/api/${params.id}`)
			.then((DataResponse) => {
				SetData(DataResponse.data);
			})
			.catch(() => {
				console.log('Error in Fetch Data');
			});
	}, [params.id]);

	if (Data) {
		return (
			<Login>
				<div className='container mx-auto text-center mt-5 pt-5'>
					<div className='col-lg-12 mb-4'>
						<div className='entry2'>
							<a href='single.html'>
								<img
									src={`http://localhost:3001/image/${Data.profile}`}
									alt='Image'
									className='img-fluid rounded'
								/>
							</a>
							<div className='excerpt'>
								<h2>
									<a href='single.html'>{Data.title}</a>
								</h2>
								<p dangerouslySetInnerHTML={{ __html: Data.description }}></p>
								<div className='post-meta align-items-center text-left clearfix'>
									<div className='d-flex justify-content-center align-items-center'>
										<span>Publish at </span>
										<span>&nbsp;-&nbsp; {Data.create}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Login>
		);
	} else {
		return <p>Loading ...</p>;
	}
};

export default Single;
