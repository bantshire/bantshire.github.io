var verbs, nouns, adjectives, adverbs, preposition;
            nouns = ["cancel", "abolish", "postpone", "stifle", "drop", "revoke", "axe", "decolonise", "shun", "deplatform"];
            verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
            adjectives = ["woke", "elitist", "out-of-touch", "smug", "lefty", "Corbyn-loving", "feeble", "defective", "pompous", "self-righteous"];
            adverbs = ["free speech", "Tory student societies", "Shakespeare", "JK Rowling", "statues", "Steak Bakes", "the Union Jack", "Jesus", "meat", "debating societies"];
            preposition = ["Anger", "Fury", "Disgust", "Despair", "Tears", "'This. Is. A. Disgrace.' says Education Secretary", "Tempers flair", "Exasperation", "Vexation", "Rage"];

            function randGen() {
              return Math.floor(Math.random() * 5);
            }

            function sentence() {
              var rand1 = Math.floor(Math.random() * 10);
              var rand2 = Math.floor(Math.random() * 10);
              var rand3 = Math.floor(Math.random() * 10);
              var rand4 = Math.floor(Math.random() * 10);
              var rand5 = Math.floor(Math.random() * 10);
              var rand6 = Math.floor(Math.random() * 10);
              //                var randCol = [rand1,rand2,rand3,rand4,rand5];
              //                var i = randGen();
              var content = preposition[rand1] + " as " + adjectives[rand1] + " universities " + nouns[rand2] + " " + adverbs[rand3] + ".";

              document.getElementById('sentence').innerHTML = content;
            };
            sentence();
