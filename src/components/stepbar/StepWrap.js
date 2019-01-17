import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { stepIndexChanged } from '../../actions';

import StepHeader from './StepHeader';
import StepContent from './StepContent';
import StepFooter from './StepFooter';

export const StepWrap = (props) => {

  if (props.steps.length === 0)
    throw new Error('There must be at least 1 step');

  const { steps, state } = props,
    titles = steps.map((step) => Object.keys(step)[0]),
    components = steps.map((step) => step[Object.keys(step)[0]]),
    nextActions = steps.map((step) => step['nextAction']),
    previousActions = steps.map((step) => step['previousAction']),
    isSingle = titles.length === 1;

  return (
    
    <View>
      <ScrollView >
        <StepHeader
          selectIndex={state.steps.index}
          titles={titles}
          single={isSingle}
        />
        <StepContent
          defaultIndex={state.steps.index}
          components={components}
        />
        
      </ScrollView>
      <StepFooter
          totalSteps={components.length}
          single={isSingle}
          nextAction={nextActions}
        />
    </View>
  );
}

const mapStateToProps = state => {
  return { state };
}

export default connect(mapStateToProps, { stepIndexChanged })(StepWrap);