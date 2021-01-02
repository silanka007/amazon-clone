import Product from "./components/Product";
import data from "./data";

function App() {
	return (
		<div className="grid-container">
			<header className="row">
				<div>
					<a className="brand" href="!#">
						Amazona
					</a>
				</div>
				<div>
					<a href="cart.html">cart</a>
					<a href="signin.html">Sign In</a>
				</div>
			</header>
			<main>
				<div className="row center">
					{data &&
						data.products.map((item) => {
							return (
								<Product item={item} key={item._id} />
							);
						})}
				</div>
			</main>
			<footer className="row center">all right reserved;</footer>
		</div>
	);
}

export default App;
