export const agents = [
  // BRIMSTOME
  {
    id: 1,
    name: "Brimstome",
    role: "CONTROLLER",
    image: "/agents/Brimstome.png",
    description:
      "Joining from the U.S.A., Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.",
    abilities: [
      {
        title: "INCENDIARY",
        abilityDesc:
          "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.",
        image: "/skills/brimstome/Incendiary.webp",
      },
      {
        title: "SKY SMOKE",
        abilityDesc:
          "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALT FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.",
          image: "/skills/brimstome/Sky_Smoke.webp",
      },
      {
        title: "STIM BEACON",
        abilityDesc:
          "EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.",
          image: "/skills/brimstome/Stim_Beacon.webp",
      },
      {
        title: "ORBITAL STRIKE",
        abilityDesc:
          "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.",
          image: "/skills/brimstome/Orbital_Strike.webp",
      },
    ],
  },
  // PHOENIX
  {
    id: 2,
    name: "Phoenix",
    role: "DUELIST",
    image: "/agents/Phoenix.png",
    description:
      "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
    abilities: [
      {
        title: "CURVEBALL",
        abilityDesc:
          "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.",
          image: "/skills/phoenix/Curveball.webp",
      },
      {
        title: "HOT HANDS",
        abilityDesc:
          "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.",
          image: "/skills/phoenix/Hot_Hands.webp",
      },
      {
        title: "BLAZE",
        abilityDesc:
          "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.",
          image: "/skills/phoenix/Blaze.webp",
      },
      {
        title: "RUN IT BACK",
        abilityDesc:
          "INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.",
          image: "/skills/phoenix/Run_it_Back.webp",
      },
    ],
  },
  // SAGE
  {
    id: 3,
    name: "Sage",
    role: "SENTINEL",
    image: "/agents/Sage.png",
    description:
      "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
    abilities: [
      {
        title: "SLOW ORB",
        abilityDesc:
          "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.",
          image: "/skills/sage/Slow_Orb.webp",
      },
      {
        title: "HEALING ORB",
        abilityDesc:
          "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.",
          image: "/skills/sage/Healing_Orb.webp",
      },
      {
        title: "BARRIER ORB",
        abilityDesc:
          "EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.",
          image: "/skills/sage/Barrier_Orb.webp",
      },
      {
        title: "RESURRECTION",
        abilityDesc:
          "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.",
          image: "/skills/sage/Resurrection.webp",
      },
    ],
  },
  // SOVA
  {
    id: 4,
    name: "Sova",
    role: "INITIATOR",
    image: "/agents/Sova.png",
    description:
      "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
    abilities: [
      {
        title: "SHOCK BOLT",
        abilityDesc:
          "EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.",
          image: "/skills/sova/Shock_Bolt.webp",
      },
      {
        title: "RECON BOLT",
        abilityDesc:
          "EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision and Revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.",
          image: "/skills/sova/Recon_Bolt.webp",
      },
      {
        title: "OWL DRONE",
        abilityDesc:
          "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. Enemies can destroy the Owl Drone.",
          image: "/skills/sova/Owl_Drone.webp",
      },
      {
        title: "HUNTER’S FURY",
        abilityDesc:
          "EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.",
          image: "/skills/sova/Hunter_Fury.webp",
      },
    ],
  },
  // VIPER
  {
    id: 5,
    name: "Viper",
    role: "CONTROLLER",
    image: "/agents/Viper.png",
    description:
      "The American Chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy's vision. If the toxins don't kill her prey, her mindgames surely will.",
    abilities: [
      {
        title: "POISON CLOUD",
        abilityDesc:
          "EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.",
          image: "/skills/viper/Poison_Cloud.webp",
      },
      {
        title: "TOXIC SCREEN",
        abilityDesc:
          "EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.",
          image: "/skills/viper/Toxic_Screen.webp",
      },
      {
        title: "SNAKE BITE",
        abilityDesc:
          "EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.",
          image: "/skills/viper/Snake_Bite.webp",
      },
      {
        title: "VIPER’S PIT",
        abilityDesc:
          "EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.",
          image: "/skills/viper/Viper_Pit.webp",
      },
    ],
  },
  // OMEN
  {
    id: 6,
    name: "Omen",
    role: "CONTROLLER",
    image: "/agents/Omen.png",
    description:
      "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
    abilities: [
      {
        title: "PARANOIA",
        abilityDesc:
          "INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.",
          image: "/skills/omen/Paranoia.webp",
      },
      {
        title: "DARK COVER",
        abilityDesc:
          "EQUIP a shadow orb, entering a phased world to place and target the orbs. PRESS the ability key to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD FIRE while targeting to move the marker further away. HOLD ALT FIRE while targeting to move the marker closer. PRESS RELOAD to toggle normal targeting view.",
          image: "/skills/omen/Dark_Cover.webp",
      },
      {
        title: "SHROUDED STEP",
        abilityDesc:
          "EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.",
          image: "/skills/omen/Shrouded_Step.webp",
      },
      {
        title: "FROM THE SHADOWS",
        abilityDesc:
          "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.",
          image: "/skills/omen/From_the_Shadows.webp",
      },
    ],
  },
  // CYPHER
  {
    id: 7,
    name: "Cypher",
    role: "SENTINEL",
    image: "/agents/Cypher.png",
    description:
      "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
    abilities: [
      {
        title: "CYBER CAGE",
        abilityDesc:
          "INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.",
          image: "/skills/cypher/Cypher_Q.png",
      },
      {
        title: "SPYCAM",
        abilityDesc:
          "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. This ability can be picked up to be REDEPLOYED.",
          image: "/skills/cypher/Cypher_E.png",
      },
      {
        title: "TRAPWIRE",
        abilityDesc:
          "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.",
          image: "/skills/cypher/Cypher_C.png",
      },
      {
        title: "NEURAL THEFT",
        abilityDesc:
          "INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.",
          image: "/skills/cypher/Cypher_X.png",
      },
    ],
  },
  // KILLJOY
  {
    id: 8,
    name: "Killjoy",
    role: "SENTINEL",
    image: "/agents/Killjoy.png",
    description:
      "The genius of Germany, Killjoy effortlessly secures key battlefield positions with her arsenal of inventions. If their damage doesn't take her enemies out, the debuff her robots provide will make short work of them.",
    abilities: [
      {
        title: "ALARMBOT",
        abilityDesc:
          "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.",
          image: "/skills/killjoy/Alarmbot.webp",
      },
      {
        title: "TURRET",
        abilityDesc:
          "EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.",
          image: "/skills/killjoy/Turret.webp",
      },
      {
        title: "NANOSWARM",
        abilityDesc:
          "EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.",
          image: "/skills/killjoy/Nanoswarm.webp",
      },
      {
        title: "LOCKDOWN",
        abilityDesc:
          "EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.",
          image: "/skills/killjoy/Lockdown.webp",
      },
    ],
  },
  // REYNA
  {
    id: 9,
    name: "Reyna",
    role: "DUELIST",
    image: "/agents/Reyna.png",
    description:
      "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
    abilities: [
      {
        title: "DEVOUR",
        abilityDesc:
          "Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.",
          image: "/skills/reyna/Devour.webp",
      },
      {
        title: "DISMISS",
        abilityDesc:
          "INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.",
          image: "/skills/reyna/Dismiss.webp",
      },
      {
        title: "LEER",
        abilityDesc:
          "EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.",
          image: "/skills/reyna/Leer.webp",
      },
      {
        title: "EMPRESS",
        abilityDesc:
          "INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.",
          image: "/skills/reyna/Empress.webp",
      },
    ],
  },
];
