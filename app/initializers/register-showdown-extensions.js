import showdown from 'showdown';
import highlight from 'showdown-highlight';

export function initialize() {
  console.log('load highlight');
  showdown.extension('highlight', highlight);
}

export default {
  name: 'register-showdown-extensions',
  initialize
};
