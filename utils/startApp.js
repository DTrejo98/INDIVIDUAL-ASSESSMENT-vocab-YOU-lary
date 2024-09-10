import { getCards } from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showCards } from '../pages/vocab';

const startApp = (user) => {
  console.warn(user);
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  navigationEvents(user);
  logoutButton();
  getCards(user.uid).then((cards) => showCards(cards));
};

export default startApp;
