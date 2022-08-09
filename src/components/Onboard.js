import { Dimensions, Image,StatusBar,StyleSheet, Text, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 9) / 10);
const imageWidth = dimensions.width;

const Onboard = (props) => {
     const onDone = () => {
        props.navigation.navigate('GetStarted');
     };
    return (
      <>
        <StatusBar hidden={true} />
        <Onboarding
          showSkip={false}
          showNext={false}
          onDone={onDone}
          SkipButtonComponent={() => (
            <TouchableOpacity style={{ backgroundColor: 'red' }}>
              <Text
                style={{
                  skipButton: {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    color: 'white'
                  }
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          )}
          pages={[
            {
              backgroundColor: '#047E40',
              image: (
                <Image
                  source={require('../images/onboard1.png')}
                  style={{ height: imageHeight, width: imageWidth }}
                />
              ),
              title: 'The Path to Better Credit',
              subtitle:
                'Get quality trading signals by ceritfied experts and proffesionals'
            },
            {
              backgroundColor: '#004ADA',
              image: (
                <Image
                  source={require('../images/onboard2.png')}
                  style={{ height: imageHeight, width: imageWidth }}
                />
              ),
              title: 'Fair Financing that Respects Your Hard Work',
              subtitle:
                'Get quality trading signals by ceritfied experts and proffesionals'
            },
            {
              backgroundColor: '#D96320',
              image: (
                <Image
                  source={require('../images/onboard3.png')}
                  style={{ height: imageHeight, width: imageWidth }}
                />
              ),
              title: 'No Credit Checks. No Payment Penalties',
              subtitle:
                'Get quality trading signals by ceritfied experts and proffesionals'
            }
          ]}
        />
      </>
    );
}

export default Onboard