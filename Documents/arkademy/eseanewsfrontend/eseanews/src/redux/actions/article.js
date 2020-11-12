import services from '../../helpers/services';
import qs from 'qs';

export default {
  getAllArticles: (query = '') => ({
    type: 'GET_ALL_ARTICLES',
    payload: services().get(
      'public/article/all' + qs.stringify({search: {title: query}}),
    ),
  }),
};
