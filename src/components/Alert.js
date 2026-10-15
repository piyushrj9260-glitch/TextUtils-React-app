import React from 'react'
import PropTypes from 'prop-types'

function Alert(props) {
if(!props.alert) return null;

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
    
  );
}

Alert.propTypes = {
  alert: PropTypes.shape({
    msg: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })
}

export default Alert
