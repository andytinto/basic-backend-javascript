/*
----------------------------------------------------------------------------------------
const Tiger = // TODO 3 
const Wolf = // TODO 4 

const figthing = (Tiger, Wolf) => {
    if (Tiger.strength > Wolf.strength) {
      Tiger.growl();
      return;
    }

    if (Wolf.strength > Tiger.strength) {
      Wolf.howl();
      return;
    }

    console.log("Tiger and Wolf have the same strength!");
}

const tiger = new Tiger();
const wolf = new Wolf();

figthing(tiger, wolf);

----------------------------------------------------------------------------------------

TODO 3 : Import class Tiger dari berkas Tiger.js.
TODO 4 : Import class Wolf dari berkas Wolf.js. 

Setelah selesai mengerjakan TODO, eksekusi berkas index.js dengan perintah:
node ./modularization/index.js 
*/

const Tiger = require('./Tiger').default;
const Wolf = require('./Wolf').default;

const figthing = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
      tiger.growl();
      return;
    }

    if (wolf.strength > tiger.strength) {
      wolf.howl();
      return;
    }

    console.log("Tiger and Wolf have the same strength!");
}

const tiger = new Tiger();
const wolf = new Wolf();

figthing(tiger, wolf);