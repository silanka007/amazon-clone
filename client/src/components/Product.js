import Rating from "./Rating";

const Product = ({ item }) => {
	return (
		<div className="card">
			<a href="!#">
				<img className="medium" src={item.image} alt={item.name} />
			</a>
			<div className="card-body">
				<a href="!#">
					<h1>{item.name}</h1>
				</a>
				<Rating rating={item.rating} numReviews={item.numReviews} />
				<h2 className="price">${item.price}</h2>
			</div>
		</div>
	);
};

export default Product;
