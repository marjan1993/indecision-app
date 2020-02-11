export const isAdult = (age) => age >= 18; // using shorthand way syntax

export const canDrink = (age) => { // using standard way syntax

      return age >= 21;
};

// const isSenior = (age) => age >= 65;
// export default isSenior;

export default (age) => age >= 65;

// export {isAdult, canDrink, isSenior as default};

// in default export we can use different names in for example person.js and app.js
// so in here we can use isSeniorCitizen name and use isSenior name for import in app.js
