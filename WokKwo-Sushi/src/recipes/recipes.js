import spicyTunaRollImage from "../assets/spicy-tuna-roll.jpeg";
import californiaRoll from "../assets/california-roll.jpeg";
import tonkotsuRamen from "../assets/tonkotsu-ramen.jpeg";
import misoRamen from "../assets/miso-ramen.jpeg";


export const recipes = [
    {
      "id": 1,
      "title": "Spicy Tuna Roll",
      "description": "A delicious and spicy sushi roll with fresh tuna.",
      "image": spicyTunaRollImage,
      "ingredients": [
        { "name": "Sushi Rice", "image": "https://example.com/sushi-rice.jpg" },
        { "name": "Fresh Tuna", "image": "https://example.com/fresh-tuna.jpg" },
        { "name": "Nori Seaweed", "image": "https://example.com/nori-seaweed.jpg" },
        { "name": "Spicy Mayo", "image": "https://example.com/spicy-mayo.jpg" },
        { "name": "Cucumber", "image": "https://example.com/cucumber.jpg" }
      ],
      "steps": [
        "Prepare sushi rice.",
        "Slice fresh tuna into thin strips.",
        "Lay nori seaweed on a sushi mat.",
        "Spread sushi rice on the nori.",
        "Place tuna, cucumber, and spicy mayo in the center of the rice.",
        "Roll tightly and cut into bite-sized pieces.",
        "Serve and enjoy!"
      ],
      "youtubeVideo": "https://www.youtube.com/watch?v=abc123"
    },
    {
      "id": 2,
      "title": "California Roll",
      "description": "A classic sushi roll with imitation crab, avocado, and cucumber.",
      "image": californiaRoll,
      "ingredients": [
        { "name": "Sushi Rice", "image": "https://example.com/sushi-rice.jpg" },
        { "name": "Imitation Crab", "image": "https://example.com/imitation-crab.jpg" },
        { "name": "Avocado", "image": "https://example.com/avocado.jpg" },
        { "name": "Cucumber", "image": "https://example.com/cucumber.jpg" },
        { "name": "Nori Seaweed", "image": "https://example.com/nori-seaweed.jpg" }
      ],
      "steps": [
        "Prepare sushi rice.",
        "Slice imitation crab, avocado, and cucumber into thin strips.",
        "Lay nori seaweed on a sushi mat.",
        "Spread sushi rice on the nori.",
        "Place imitation crab, avocado, and cucumber in the center of the rice.",
        "Roll tightly and cut into bite-sized pieces.",
        "Serve and enjoy!"
      ],
      "youtubeVideo": "https://www.youtube.com/watch?v=def456"
    },
    {
      "id": 3,
      "title": "Tonkotsu Ramen",
      "description": "A rich and flavorful pork-based ramen soup.",
      "image": tonkotsuRamen,
      "ingredients": [
        { "name": "Pork Bones", "image": "https://example.com/pork-bones.jpg" },
        { "name": "Ramen Noodles", "image": "https://example.com/ramen-noodles.jpg" },
        { "name": "Chashu Pork", "image": "https://example.com/chashu-pork.jpg" },
        { "name": "Soft-Boiled Egg", "image": "https://example.com/soft-boiled-egg.jpg" },
        { "name": "Green Onions", "image": "https://example.com/green-onions.jpg" }
      ],
      "steps": [
        "Simmer pork bones in water for several hours to create a flavorful broth.",
        "Cook ramen noodles according to package instructions.",
        "Slice chashu pork and green onions.",
        "Place cooked noodles in a bowl.",
        "Pour hot broth over the noodles.",
        "Top with chashu pork, soft-boiled egg, and green onions.",
        "Serve and enjoy!"
      ],
      "youtubeVideo": "https://www.youtube.com/watch?v=ghi789"
    },
    {
      "id": 4,
      "title": "Miso Ramen",
      "description": "A savory ramen soup with miso paste and toppings.",
      "image": misoRamen,
      "ingredients": [
        { "name": "Miso Paste", "image": "https://example.com/miso-paste.jpg" },
        { "name": "Ramen Noodles", "image": "https://example.com/ramen-noodles.jpg" },
        { "name": "Sliced Pork", "image": "https://example.com/sliced-pork.jpg" },
        { "name": "Corn", "image": "https://example.com/corn.jpg" },
        { "name": "Bean Sprouts", "image": "https://example.com/bean-sprouts.jpg" }
      ],
      "steps": [
        "Cook ramen noodles according to package instructions.",
        "In a separate pot, prepare miso soup base with miso paste and water.",
        "Boil sliced pork, corn, and bean sprouts until cooked.",
        "Place cooked noodles in a bowl.",
        "Pour miso soup over the noodles.",
        "Top with sliced pork, corn, and bean sprouts.",
        "Serve and enjoy!"
      ],
      "youtubeVideo": "https://www.youtube.com/watch?v=jkl789"
    }
  ];
  