import React, { Component }  from 'react';
import StarRating from 'react-native-star-rating';
 
class GeneralStarExample extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
        starCount: 2.5
      };
    }
   
    onStarRatingPress(rating) {
      this.setState({
        starCount: rating
      });
    }
   
    render() {
      return (
        <StarRating
          disabled={false}
          emptyStar={require('../assets/Icons/emptyStar.png')}
          fullStar={require('../assets/Icons/filledStar.png')}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
          fullStarColor={'red'}
          starSize={19}
        />
      );
    }
  }
 
export default GeneralStarExample