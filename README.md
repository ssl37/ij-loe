# Ij-Loe

This project was requested by a close friend who teaches high school Spanish. He
wanted a way to create spot-it type cards with spanish and english words that
students could use to drill their vocabulary. The page will be styled for printing,
which was his original request. But to make it a little more interactive, the 
online form includes a play functionality where entries from two separate cards
can be clicked, and will turn green if the words match. There is exactly one match
per pair of cards.

Ij Loe is Marshallese for 'I see it'...

![Build Status][ci-badge]

Originally this started from one of the google cloud platform tutorials. Credit
to them for creating such helpful and informative guides.

# Deployment Instructions

1. Clone this project:

        git clone git@github.com:ssl37/ij-loe.git

1.  Change directory:

        cd ij-loe

1.  Install dependencies:

        npm install

1.  Build the app

        npm run react-build

1.  Deploy the app:

        gcloud app deploy

1.  View the deployed app at [https://ij-loe.appspot.com](https://ij-loe.appspot.com).
