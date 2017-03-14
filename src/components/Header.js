import React from 'react';


// State-less component syntax
const Header = ({ message }) => {
   return (
      <h2 className="Header text-center">
         {message}
      </h2>
   );
};

Header.propTypes = {
   message: React.PropTypes.string
};

Header.defaultProps = {
   message: 'Hello!'
};

export default Header;