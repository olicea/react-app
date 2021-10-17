import PropTypes from 'prop-types';

const Button = ( {color, text} ) => {
    const onClick = (e) => {
        console.log('click');
    }
    return (
        <div>
            <button 
                onClick={onClick}
                style={ { backgroundColor: color }} 
                className='btn'>Add</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelBlue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
