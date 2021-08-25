import { useSelector } from 'react-redux';
import { selectors } from 'modules/entities/modules/reports';

export default () => useSelector(state => selectors.reportSelector(state));
