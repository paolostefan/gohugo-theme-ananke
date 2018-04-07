import styles from './../css/main.css';


// NOTE: TO use Jquery, just call the modules you want
// var $ = require('jquery/src/core');
// require('jquery/src/core/init');
// require('jquery/src/manipulation');

// OR, use all of them
// var $ = require('jquery/src/jquery');

// And write your code
// $('body').append('<p>Jquery is working</p>');
//
// You can also "require" any script from its location in the node modules folder. Webpack often knows what to look for, but you can add a script directly like this:
// var javascriptthingy = require('name/folder/file.js');

import fontawesome from '@fortawesome/fontawesome'
import brand from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(brands.faDeviantart)
fontawesome.library.add(brands.faGithub)
fontawesome.library.add(brands.faStackOverflow)
fontawesome.library.add(brands.faTwitter)
fontawesome.library.add(brands.faLinkedin)
fontawesome.library.add(brands.faYoutube)
fontawesome.library.add(brands.faFacebook)
fontawesome.library.add(brands.faInstagram)
