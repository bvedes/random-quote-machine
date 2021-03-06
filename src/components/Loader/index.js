import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => (
  <FontAwesomeIcon className="icon fa-spin" icon={faSpinner} />
);
export default Loader;
