import moment from 'moment';
import { getGreeting } from './getGreeting';

$('.name').on('input', function () {
  const name = this.value;
  const message = name ? getGreeting(name) : '';
  $('.message').text(message);
});

const formattedDate = moment().format('YYYY/MM/DD');
$('.currentDate').text(formattedDate);
