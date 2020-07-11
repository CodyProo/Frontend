import React from 'react';
import Axios from 'axios';
import Blog from '../components/blog';
import Login from './Login';

const Home = ({ history }) => {
	const [Data, SetData] = React.useState(null);

	React.useEffect(() => {
		Axios('https://mysterious-journey-85780.herokuapp.com/api')
			.then((DataResponse) => {
				SetData(DataResponse.data);
			})
			.catch(() => {
				console.log('Error in Fetch Data');
			});
	}, []);
	if (Data) {
		return (
			<Login>
				<div className='site-wrap'>
					<div className='site-section bg-light'>
						<div className='container'>
							<div className='row align-items-stretch retro-layout-2'>
								<div className='col-md-4'>
									<a
										href='#'
										className='h-entry v-height gradient American'></a>
									<a
										href='single.html'
										className='h-entry my-4 v-height gradient Net'>
										<div className='text'>
											<h2>Build B Programming Lang For Web Developer</h2>
											<span className='date'>
												The Best Backend developer Language
											</span>
										</div>
									</a>
								</div>
								<div className='col-md-4'>
									<a
										href='single.html'
										className='h-entry img-5 h-100 gradient BillGates'>
										<div className='text'>
											<h2>
												My Collbrate in Microsoft and Helper in B Language
											</h2>
											<span className='date'>Bill Gates</span>
										</div>
									</a>
								</div>
								<div className='col-md-4'>
									<a
										href='single.html'
										className='h-entry mb-30 v-height gradient Microsoft'>
										<div className='text'>
											<h2>I Join The Microsoft Company</h2>
											<span className='date'>Microsoft and ASP.NET CORE</span>
										</div>
									</a>
									<a
										href='single.html'
										className='h-entry v-height gradient Google'>
										<div className='text'>
											<h2>I Join Google</h2>
											<span className='date'>
												The Programmer of Microsoft and Google
											</span>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='site-section'>
						<div className='container'>
							<div className='row mb-5'>
								<div className='col-12'>
									<h2>Recent Posts</h2>
								</div>
							</div>
							<div className='row'>
								{Data.map((element) => {
									return <Blog data={element} />;
								})}
							</div>
						</div>

						<div className='container my-5 py-5 text-center'>
							<h1>If You Want to Create Your Own Blog Click on Button Below</h1>
							<button
								className='my-5 btn btn-primary px-5'
								onClick={() => {
									history.push('/Create');
								}}>
								Create
							</button>
						</div>

						<div className='site-footer'>
							<div className='container'>
								<div className='row mb-5'>
									<div className='col-md-4'>
										<h3 className='footer-heading mb-4'>About Us</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Placeat reprehenderit magnam deleniti quasi saepe,
											consequatur atque sequi delectus dolore veritatis
											obcaecati quae, repellat eveniet omnis, voluptatem in.
											Soluta, eligendi, architecto.
										</p>
									</div>
									<div className='col-md-3 ml-auto'>
										<h3 className='footer-heading mb-4'>Navigation</h3>
										<ul className='list-unstyled float-left mr-5'>
											<li>
												<a href='#'>About Us</a>
											</li>
											<li>
												<a href='#'>Advertise</a>
											</li>
											<li>
												<a href='#'>Careers</a>
											</li>
											<li>
												<a href='#'>Subscribes</a>
											</li>
										</ul>
										<ul className='list-unstyled float-left'>
											<li>
												<a href='#'>Travel</a>
											</li>
											<li>
												<a href='#'>Lifestyle</a>
											</li>
											<li>
												<a href='#'>Sports</a>
											</li>
											<li>
												<a href='#'>Nature</a>
											</li>
										</ul>
									</div>
									<div className='col-md-4'>
										<div>
											<h3 className='footer-heading mb-4'>Connect With Us</h3>
											<p>
												<a href='#'>
													<span className='icon-facebook pt-2 pr-2 pb-2 pl-0'></span>
												</a>
												<a href='#'>
													<span className='icon-twitter p-2'></span>
												</a>
												<a href='#'>
													<span className='icon-instagram p-2'></span>
												</a>
												<a href='#'>
													<span className='icon-rss p-2'></span>
												</a>
												<a href='#'>
													<span className='icon-envelope p-2'></span>
												</a>
											</p>
										</div>
									</div>
								</div>
								<div className='row'>
									<div className='col-12 text-center'>
										<p>
											Link back to Colorlib can't be removed. Template is
											licensed under CC BY 3.0. Copyright &copy; All rights
											reserved | This template is made with
											<i
												className='icon-heart text-danger'
												aria-hidden='true'></i>{' '}
											by
											<a href='https://colorlib.com' target='_blank'>
												Colorlib
											</a>
											Link back to Colorlib can't be removed. Template is
											licensed under CC BY 3.0.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Login>
		);
	} else {
		return <p>Loading ....</p>;
	}
};

export default Home;
