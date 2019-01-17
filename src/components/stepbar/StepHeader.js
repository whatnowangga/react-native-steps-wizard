import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import StepCircle from './StepCircle';
import { stepIndexChanged } from '../../actions';

class StepHeader extends Component {
  constructor(props){
    super(props)
  }

  renderSteps(){
    let index = 1;
    const { titles, steps } = this.props;
    return (
      <View style={styles.container}>
        {
          titles.map((titleStep) => {
            return (
              <View key={titleStep} style={styles.stepContainer}>
                <StepCircle
                  selectedIndex={steps.index}
                  index={index++}
                />
              
                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.circleTitle}>
                  {titleStep}
                </Text>
              </View>
            );
          })
        }
        <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>
      </View>
    );
  }

  renderSingleStep(){

    let index = 1;
    const { titles, steps } = this.props;
    
    return (
      <View style={styles.container}>
        {
          titles.map((titleStep) => {
            return (
              <View key={titleStep} style={styles.stepContainer}>
                <StepCircle
                  selectedIndex={steps.index}
                  index={index++}
                />
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.circleTitle}>
                  {titleStep}
                </Text>
              </View>
            );
          })
          
        }
        <View style={styles.stepContainer}>
          <StepCircle />
          <Text style={styles.circleTitle}>
            End
          </Text>
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>
        
      </View>
    );
  }

  
  render() {
    const { titles, single } = this.props;
    let isEmpty = titles.length === 0,
      isSingle = single;

    let renderView = (isSingle) ? this.renderSingleStep() :
      this.renderSteps();
    return renderView;

  }
}

const mapStateToProps = state => {
  const { steps } = state;
  return { steps };
}

export default connect(mapStateToProps, { stepIndexChanged })(StepHeader);


const styles = {
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 1,
    width:'100%'
  },
  stepContainer: {
    flexDirection: 'column',
    width: 70,
    alignItems: 'center',
    justifyContent:'center',
    zIndex: 1,
    position: 'relative'
  },
  lineContainer:{
    width: '100%',
    paddingLeft:20,
    paddingRight:20,
    top: 25,
    position: 'absolute'
  },
  line: {
    backgroundColor: '#2E81D3',
    height: 1,
    zIndex: 0,
  },
  circleTitle: {
    marginTop: 10,
    fontSize: 12,
    zIndex: 1,
    alignSelf:'center',
    textAlign:'center',
    height:30,
  }

}