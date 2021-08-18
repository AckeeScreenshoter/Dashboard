import { useSelector } from 'react-redux';
import { selectors } from 'modules/entities/modules/filters';

export default () => useSelector(state => selectors.filtersSelector(state));
