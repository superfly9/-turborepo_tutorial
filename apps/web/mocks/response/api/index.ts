import feed from './feed.json';
import story from './story.json';
import search from './search.json';
import { apiRoutes } from '@/apiRoute';

export default {
  [apiRoutes.feed]: feed,
  [apiRoutes.story]: story,
  [apiRoutes.search]: search,
};