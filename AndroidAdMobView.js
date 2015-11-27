var { PropTypes, requireNativeComponent } = require('react-native');

var iface = {
    name: 'AdMobView',
    propTypes: {
        src: PropTypes.string
    }
}

module.exports = requireNativeComponent('RCTAdMobView', iface);