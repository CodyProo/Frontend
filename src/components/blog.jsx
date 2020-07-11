import React from 'react';
import HeroImage from '../assets/images/Bill/biil.jpg';
import { Link } from 'react-router-dom';
import Jalay from 'jalali-moment';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const Blog = ({ data }) => {
	const jalaly = Jalay(new Date(data.create))
		.local('fa')
		.format('jYYYY/jMM/jDD');

	dayjs.extend(relativeTime);
	return (
		<div className='col-lg-6 mb-4'>
			<div className='entry2'>
				<img
					src={`https://mysterious-journey-85780.herokuapp.com/image/${data.profile}`}
					alt='Image'
					className='img-fluid rounded'
					style={{ height: 300 }}
				/>
				<div className='excerpt'>
					<h2 style={{ height: 60, overflow: 'hidden' }}>{data.title}</h2>
					<div className='post-meta align-items-center text-left clearfix'>
						<figure className='author-figure mb-0 mr-3 float-left'>
							<img src={HeroImage} alt='Image' className='img-fluid' />
						</figure>
						<span>
							&nbsp;-&nbsp; {jalaly} {dayjs(new Date(data.create)).fromNow()}
						</span>
					</div>

					<p>
						<Link to={`/Single/${data._id}`}>Read More</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
