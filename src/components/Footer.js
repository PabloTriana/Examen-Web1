import PropTypes from "prop-types"


export default  function Footer({titulo}) {
    return (
        <div className="App-footer">
            <h6>{titulo}</h6>
        </div>
    )
}


Footer.propTypes = {
    titulo: PropTypes.string
  };