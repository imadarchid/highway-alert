# Highway

An AngularJS app that offers to authorities, and highway companies (In this project Autoroutes Du Maroc) to create daily alerts about road status (Accidents, Traffic, Changes...). Users of this app can also submit a report if they notice a problem in the Highway. 

I've made this for learning purposes, so the code may be really REALLY shitty, seriously, it might hurt your eyes.

## Requirements :

- Facebook API key (app.js)
- Firebase Account (DB Url)


## What's working ?
- Submitting a report to Firebase DB.
- Facebook login.
- Routes and Ng-show/hide.

## What's not ?
- Facebook routing (I've got issues with loginStatus (connected, and not_authorized)
- Live map of issues (I didn't work on it at all, yeah laziness)

## Build & development

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

Run `bower install` and `npm install` to install all the dependencies.

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

# Creating an alert :

You can do so by editing `main.js` :

````js
$scope.data = [{
        date: '13/12/2016 00:21',
        title: 'Accident poids-lourd autoroute A7 (Marrakech - Casa)',
        desc: 'Un poids-lours (15t) a percuté 2 voitures vers la sortie Berrechid, ce qui a bloqué la circulation. Les secours et les services de dépannages sont arrivés sur place, et évacuent la voie. Bouchon à prévoir, veuillez éviter ce tronçon si possible',
        degree: 'Très Grave',
        category: 'Bouchon',
        traffic: 'Dense'
    }];
// You can add other alerts here ! 
// Or load them from a server using http.get()
````
# TODO :

- Simplify the way of creating alerts using forms
- Fix Facebook routing issues
- Redesign (angular-material maybe ?)

You can help by contributing to this project !

2016 - Made by Imad Archid.
