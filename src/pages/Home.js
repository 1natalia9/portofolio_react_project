import Header from './../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<p>
								JavaScript, React, Redux,
								HTML, CSS, NPM, StyledComponents
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Graphic Design</h2>
							<p>Adobe Illustrator, Adobe Photoshop, Adobe InDesign, CorelDRAW, Figma</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;