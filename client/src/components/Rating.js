const Rating = ({ rating, numReviews }) => {
	const ratingToArr = (rating) => {
		let result = [];
		for (let i = 1; i <= 5; i++) {
			rating >= i
				? result.push("fas fa-star")
				: rating >= i - 0.5
				? result.push("fas fa-star-half-alt")
				: result.push("far fa-star");
		}
		return result;
	};
	const ratingArr = ratingToArr(rating);
	return (
		<div className="rating">
			{ratingArr &&
				ratingArr.map((fontClass, index) => {
					return (
						<span key={index}>
							<i className={fontClass}></i>
						</span>
					);
				})}
			rating - {rating}
			<span style={{ marginLeft: "3rem" }}>{numReviews} - reviews</span>
		</div>
	);
};

export default Rating;
