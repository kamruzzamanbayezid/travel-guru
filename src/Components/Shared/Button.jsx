import PropTypes from 'prop-types';
import './Button.css'

const Button = ({ text, width = '100px' }) => {
      return (
            <div>
                  <button style={{
                        width: `${width}`,
                  }} className={`btn-style`}>{text}</button>
            </div >
      );
};

Button.propTypes = {
      text: PropTypes.string,
      width: PropTypes.string
};

export default Button;