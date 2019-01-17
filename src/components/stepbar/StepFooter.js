
import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import StepButton from '../stepbar/StepButton';
import { stepIndexChanged } from '../../actions';

class StepFooter extends Component {

  backButton() {
    const { steps, totalSteps } = this.props;
    let currentIndex = steps.index,
      previusIndex = currentIndex - 1;
    if (previusIndex >= 0 && previusIndex <= totalSteps)
      this.props.stepIndexChanged(previusIndex);
  }

  continueButton() {
    const { steps, totalSteps, single, nextAction } = this.props;
    let currentIndex = steps.index,
      nextIndex = (currentIndex > totalSteps) ? totalSteps : currentIndex + 1;

    if (nextIndex < totalSteps) {
      this.props.stepIndexChanged(nextIndex);
      nextAction[currentIndex]();
    }
    else if (nextIndex === totalSteps) {
      console.log(currentIndex);
      nextAction[currentIndex]();
    }
    else if (single)
      nextAction[currentIndex]();
  }

  render() {
    const { single } = this.props;
    return (single) ?
      <View style={styles.buttonsDirectionContainer}>
        <StepButton />
        <StepButton onPress={this.continueButton.bind(this)}>Finish</StepButton>
      </View> :
      <View style={styles.buttonsDirectionContainer}>
        <StepButton onPress={this.backButton.bind(this)}>Back</StepButton>
        <StepButton onPress={this.continueButton.bind(this)}>Next</StepButton>
      </View>
  }
}

const styles = {
  buttonsDirectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft:5,
    paddingRight:5,
    paddingTop:5,
    bottom:0,
  }
}

const mapStateToProps = state => {
  const { steps } = state;
  return { steps };
}

export default connect(mapStateToProps, { stepIndexChanged })(StepFooter);