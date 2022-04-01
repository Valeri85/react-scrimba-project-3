import React from 'react';
import star from '../../images/icons/star.svg';

function Card(props) {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = 'SOLD OUT';
	} else if (props.location === 'Online') {
		badgeText = 'ONLINE';
	}

	return (
		<figure className="card">
			{badgeText && <p className="card__status">{badgeText}</p>}
			<img className="card__img" src={`../src/images/${props.coverImg}`} width={176} height={235} alt="" />
			<figcaption>
				<p className="card__rating">
					<img className="card__rating-icon" src={star} width={12} height={11} alt="" aria-hidden="true" />
					{props.stats.rating}
					<span className="card__rating-light">{` (${props.stats.reviewCount}) • ${props.location}`}</span>
				</p>
				<p className="card__name">{props.title}</p>
				<p className="card__price">
					<span className="card__price-bold">From {props.price}</span> / person
				</p>
			</figcaption>
		</figure>
	);
}

export default Card;
