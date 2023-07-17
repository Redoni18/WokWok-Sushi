import spicyTunaRollImage from "../assets/spicy-tuna-roll.jpeg";
import californiaRoll from "../assets/california-roll.jpeg";
import tonkotsuRamen from "../assets/tonkotsu-ramen.jpeg";
import misoRamen from "../assets/miso-ramen.jpeg";

import sushiRice from "../assets/sushi-rice.webp"
import noriSeaWeed from "../assets/nori-seaweed.webp"
import spicyMayo from "../assets/spicy-mayo.webp"
import cucumber from "../assets/cucumber.webp"
import freshTuna from "../assets/fresh-tuna.webp"
import imitationCrab from "../assets/imitation-crab.jpg"
import avocado from "../assets/avocado.webp"
import porkBones from "../assets/pork-bones.webp"
import ramenNoodles from "../assets/ramen-noodles.jpeg"
import chashuPork from "../assets/chashu-pork.jpeg"
import softBoiledEggs from "../assets/soft-boiled-eggs.webp"
import greenOnions from "../assets/green-onions.jpeg"
import misoPaste from "../assets/miso-paste.webp"
import slicedPork from "../assets/sliced-pork.jpeg"
import corn from "../assets/corn.jpeg"
import beanSprouts from "../assets/bean-sprouts.webp"

export const recipes = [
    {
      "id": 1,
      "title": "Spicy Tuna Roll",
      "description": "A delicious and spicy sushi roll with fresh tuna.",
      "image": spicyTunaRollImage,
      "ingredients": [
        { "name": "Sushi Rice", "image": sushiRice },
        { "name": "Fresh Tuna", "image": freshTuna },
        { "name": "Nori Seaweed", "image": noriSeaWeed },
        { "name": "Spicy Mayo", "image": spicyMayo},
        { "name": "Cucumber", "image": cucumber }
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
      "youtubeVideo": "https://www.youtube.com/embed/Yhv4bYA3Rfk"
    },
    {
      "id": 2,
      "title": "California Roll",
      "description": "A classic sushi roll with imitation crab, avocado, and cucumber.",
      "image": californiaRoll,
      "ingredients": [
        { "name": "Sushi Rice", "image": sushiRice },
        { "name": "Imitation Crab", "image": imitationCrab},
        { "name": "Avocado", "image": avocado },
        { "name": "Cucumber", "image": cucumber },
        { "name": "Nori Seaweed", "image": noriSeaWeed }
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
      "youtubeVideo": "https://www.youtube.com/embed/_P7f0RWg3F0"
    },
    {
      "id": 3,
      "title": "Tonkotsu Ramen",
      "description": "A rich and flavorful pork-based ramen soup.",
      "image": tonkotsuRamen,
      "ingredients": [
        { "name": "Pork Bones", "image": porkBones },
        { "name": "Ramen Noodles", "image": ramenNoodles },
        { "name": "Chashu Pork", "image": chashuPork },
        { "name": "Soft-Boiled Egg", "image": softBoiledEggs },
        { "name": "Green Onions", "image": greenOnions }
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
      "youtubeVideo": "https://www.youtube.com/embed/2fBs5MNlK2s"
    },
    {
      "id": 4,
      "title": "Miso Ramen",
      "description": "A savory ramen soup with miso paste and toppings.",
      "image": misoRamen,
      "ingredients": [
        { "name": "Miso Paste", "image": misoPaste },
        { "name": "Ramen Noodles", "image": ramenNoodles },
        { "name": "Sliced Pork", "image": slicedPork },
        { "name": "Corn", "image": corn },
        { "name": "Bean Sprouts", "image": beanSprouts }
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
      "youtubeVideo": "https://www.youtube.com/embed/IKlIYkX7W8U"
    }
  ];
  