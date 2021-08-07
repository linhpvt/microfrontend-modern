// we want to ensure all dependencies are loaded and ready for use even if there are several dependencies are set up as shared libs
// this is a trick to tell webpack to load asynchronous libs completely before using them
import('./bootstrap');
console.log('Auth application started');
