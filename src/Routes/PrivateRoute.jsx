import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

      const { user, loading } = useContext(AuthContext);
      const location = useLocation();

      if (loading) {
            return <div className='flex items-center justify-center'><img src="https://i.ibb.co/SsF2Lb0/loading-7528-256.gif" alt="" /></div>
      }

      if (user) {
            return children
      }

      return <Navigate to='/login' state={location?.pathname} />;
};

PrivateRoute.propTypes = {
      children: PropTypes.node
};

export default PrivateRoute;