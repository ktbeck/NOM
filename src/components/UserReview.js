import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';


class UserReview extends Component {
    render() { 
      const reviewers = getUserReviewers(this.props.review);
      const avgRating = avgUserRating(reviewers);
        return (  
          <div>
          <h4>Avg Rating:  {avgRating}
              </h4>
              {reviewers.map((review) =>
              <div>
                {getReviewerName(review)} &nbsp;
                User Rating : <StarRatings rating = {getUserRating(review)}
                                            starDimension = '23px'
                                            starSpacing = '0px'
                                            starRatedColor = "yellow"/><br></br>
                {getUserReview(review)}<br></br>
              </div>
                )
              }
          </div>
        );
    }
}
 
function avgUserRating(userReview){
  let numOfReviews = 0;
  let sumRating = 0;
  for(let i in userReview){
    if (userReview[i] !== null){
      sumRating += getUserRating(userReview[i]);
      numOfReviews++;
    }
  }
  return ( sumRating / numOfReviews);

}

function getUserReviewers(reviews){
  let userReviewers = [];
  for(let i in reviews){
    userReviewers.push(reviews[i]);
  }
  return userReviewers;
}
function getReviewerName(reviewer){
  return reviewer.reviewer;
}
function getUserRating(reviewer){
  return parseFloat(reviewer.rating);
}
function getUserReview(reviewer){
  return reviewer.review;
}

  export default UserReview;