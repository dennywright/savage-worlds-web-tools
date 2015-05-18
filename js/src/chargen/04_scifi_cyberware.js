/*
Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Sci-Fi Companion and are owned by Pinnacle Entertainment Group.
 */

    if(!chargen_gear)
      var chargen_gear = Array();

chargen_gear = chargen_gear.concat( Array(

  {
    name: "Cybernetic Adrenal Surge",
    general: "Cyberware",
    class: "",
    type: "",
    limit: 1,
    description: "The character’s adrenal gland has been surgically augmented. He receives +2 to recover from being Shaken. This stacks with the Combat Reflexes Edge.",
    strain: 2,
    cost: 5000,
    weight: 0,
    book: books_list[4],
    page: "p30"
  },
  {
    name: "Cybernetic Aquatic Package",
    general: "Cyberware",
    class: "",
    type: "",
    limit: 1,
    description: "The recipient is fitted with gills and collapsible webbing is installed between his fingers and toes. He can breathe in any oxygen-filled liquid (most lakes, rivers, or oceans), and his underwater Pace is equal to his Swimming skill.",
    strain: 2,
    cost: 5000,
    weight: 0,
    book: books_list[4],
    page: "p30"
  },
  {
    name: "Cybernetic Armor",
    general: "Cyberware",
    class: "",
    type: "",
    limit: "U",
    description: "Subdermal plates or fibers have been placed beneath the character’s skin, granting him +2 Armor all over. This stacks with normal Armor, but not Heavy Armor (use the higher value).",
    strain: 1,
    cost: 3000,
    weight: 0,
    book: books_list[4],
    page: "p30"
  },
  {
    name: "Cybernetic Attribute Increase",
    general: "Cyberware",
    class: "",
    type: "",
    limit: "U",
    description: "Each time this implant is chosen, an attribute may be increased a die step. Each step after d12 adds +1.",
    strain: 2,
    cost: 3000,
    weight: 0,
    book: books_list[4],
    page: "p30"
  },
  {
    name: "Cybernetic Autodoc",
    general: "Cyberware",
    class: "",
    type: "",
    limit: 1,
    description: "Resident nanobots heal the recipient when wounded. They automatically heal one wound per day and add +4 to rolls to resist Bleeding Out. They have a 50% chance per day of healing any disease or poison once it gets into the blood stream (assuming the character is still alive).",
    strain: 2,
    cost: 10000,
    weight: 0,
    book: books_list[4],
    page: "p30"
  },
  {
    name: "Cybernetic Combat Specialty (Novice)",
    general: "Cyberware",
    class: "",
    type: "",
    limit: "U",
    description: "The character may take a Combat Edge, ignoring all requirements except the requirement of other Edges. The Edge benefits do not stack with the same Edge if the character has it naturally as well as through his cyberware.",
    strain: 2,
    cost: 5000,
    weight: 0,
    book: books_list[4],
    page: "p30"
  },
  {
    name: "Cybernetic Combat Specialty (Seasoned)",
    general: "Cyberware",
    class: "",
    type: "",
    limit: "U",
    description: "The character may take a Combat Edge, ignoring all requirements except the requirement of other Edges. The Edge benefits do not stack with the same Edge if the character has it naturally as well as through his cyberware.",
    strain: 2,
    cost: 10000,
    weight: 0,
    book: books_list[4],
    page: "p30"
  },
  {
    name: "Cybernetic Combat Specialty (Veteran)",
    general: "Cyberware",
    class: "",
    type: "",
    limit: "U",
    description: "The character may take a Combat Edge, ignoring all requirements except the requirement of other Edges. The Edge benefits do not stack with the same Edge if the character has it naturally as well as through his cyberware.",
    strain: 2,
    cost: 15000,
    weight: 0,
    book: books_list[4],
    page: "p30"
  },
  {
    name: "Cybernetic Combat Specialty (Heroic)",
    general: "Cyberware",
    class: "",
    type: "",
    limit: "U",
    description: "The character may take a Combat Edge, ignoring all requirements except the requirement of other Edges. The Edge benefits do not stack with the same Edge if the character has it naturally as well as through his cyberware.",
    strain: 2,
    cost: 20000,
    weight: 0,
    book: books_list[4],
    page: "p30"
  },
  {
    name: "Cybernetic Combat Specialty (Legendary)",
    general: "Cyberware",
    class: "",
    type: "",
    limit: "U",
    description: "The character may take a Combat Edge, ignoring all requirements except the requirement of other Edges. The Edge benefits do not stack with the same Edge if the character has it naturally as well as through his cyberware.",
    strain: 2,
    cost: 25000,
    weight: 0,
    book: books_list[4],
    page: "p30"
  },
  {
    name: "Cybernetic Communicator",
    general: "Cyberware",
    class: "",
    type: "",
    limit: 1,
    description: "A small radio has been built into the character’s skull. It has a range of five miles and can communicate with standard radio equipment.",
    strain: 1,
    cost: 1000,
    weight: 0,
    book: books_list[4],
    page: "p30"
  },
  {
    name: "Cybernetic Cyberjack",
    general: "Cyberware",
    class: "",
    type: "",
    limit: 1,
    description: "Real hackers don’t use keyboards—they tap directly into the system via a datajack in their head and \“run the matrix.\” This adds +4 to all Knowledge rolls dealing with electronics. If the character fails such a roll anyway, the intense feedback causes a level of Fatigue that fades in one hour and can cause Incapacitation but not death. If the system was particularly powerful or well-protected, failure (including during a failed Dramatic Task) causes 3d6 damage (or more for very high-end corporate or military computers). Armor offers no protection from this damage.",
    strain: 1,
    cost: 3000,
    weight: 0,
    book: books_list[4],
    page: "p30"
  },
  {
    name: "Cybernetic Face Changer",
    general: "Cyberware",
    class: "",
    type: "",
    limit: 1,
    description: "The muscles, bones, and vocal cords in the character’s face and throat have been replaced with a morphable, synthetic substance, allowing her to alter her facial features with a thought. Each change takes five minutes and requires a Smarts roll. The character may raise or lower her Charisma by 1 point per success and raise. The implant may be used to duplicate a specific person’s face and speech (assuming they’re of the same relative size) if a picture (and voice sample for the vocal cords) exists.",
    strain: 3,
    cost: 15000,
    weight: 0,
    book: books_list[4],
    page: "p30"
  },
  {
    name: "Cybernetic Filters",
    general: "Cyberware",
    class: "",
    type: "",
    limit: 1,
    description: "Filters in the ears, nose, throat, and lungs remove most airborne toxins and increase oxygen intake. The hero adds +4 to rolls made to resist the effects of airborne disease, poison, or deadly gases, and Thin or Dense Atmosphere.",
    strain: 1,
    cost: 5000,
    weight: 0,
    book: books_list[4],
    page: "p30"
  },
  {
    name: "Cybernetic Leg Enhancement",
    general: "Cyberware",
    class: "",
    type: "",
    limit: "U",
    description: "The character gains +2 Pace and increases his running die one step. He also increases his jumping distances by 1\". Each time this is taken after the first increases Pace by +2.",
    strain: 2,
    cost: 5000,
    weight: 0,
    book: books_list[4],
    page: "p31"
  },
  {
    name: "Cybernetic Mule",
    general: "Cyberware",
    class: "",
    type: "",
    limit: 1,
    description: "The character’s skeleton has been strengthened, increasing his Load Limit to 8× his Strength. If he has the Brawny Edge as well, it increases to 10× Strength.",
    strain: 2,
    cost: 5000,
    weight: 0,
    book: books_list[4],
    page: "p31"
  },
  {
    name: "Cybernetic Skill Chip +1",
    general: "Cyberware",
    class: "",
    type: "",
    limit: "U",
    description: "Add or increase a skill a die type, but no more than +4 steps in any one skill. Skill chips may be swapped freely with no surgery. This is a free action, but takes an entire round before the new skill is active. Chips carried separately are the size of thumbnails and have no significant weight.",
    strain: 1,
    cost: "3000",
    weight: 0,
    book: books_list[4],
    page: "p31"
  },
  {
    name: "Cybernetic Skill Chip +2",
    general: "Cyberware",
    class: "",
    type: "",
    limit: "U",
    description: "Add or increase a skill a die type, but no more than +4 steps in any one skill. Skill chips may be swapped freely with no surgery. This is a free action, but takes an entire round before the new skill is active. Chips carried separately are the size of thumbnails and have no significant weight.",
    strain: 1,
    cost: "6000",
    weight: 0,
    book: books_list[4],
    page: "p31"
  },
  {
    name: "Cybernetic Skill Chip +3",
    general: "Cyberware",
    class: "",
    type: "",
    limit: "U",
    description: "Add or increase a skill a die type, but no more than +4 steps in any one skill. Skill chips may be swapped freely with no surgery. This is a free action, but takes an entire round before the new skill is active. Chips carried separately are the size of thumbnails and have no significant weight.",
    strain: 1,
    cost: "9000",
    weight: 0,
    book: books_list[4],
    page: "p31"
  },
  {
    name: "Cybernetic Skill Chip +4",
    general: "Cyberware",
    class: "",
    type: "",
    limit: "U",
    description: "Add or increase a skill a die type, but no more than +4 steps in any one skill. Skill chips may be swapped freely with no surgery. This is a free action, but takes an entire round before the new skill is active. Chips carried separately are the size of thumbnails and have no significant weight.",
    strain: 1,
    cost: "12000",
    weight: 0,
    book: books_list[4],
    page: "p31"
  },
  {
    name: "Cybernetic Trait Bonus",
    general: "Cyberware",
    class: "",
    type: "",
    limit: "U",
    description: "This represents a host of various devices that add a flat +2 bonus to any skill or attribute (but only once per Trait). A targeting eye, for example, might add +2 to Shooting. This stacks with all other bonuses as usual.",
    strain: 1,
    cost: 10000,
    weight: 0,
    book: books_list[4],
    page: "p31"
  },
  {
    name: "Cybernetic Vision Enhancement",
    general: "Cyberware",
    class: "",
    type: "",
    limit: 1,
    description: "Cybernetic eyes grant magnification (50×), thermal, and low-light vision. This adds +2 to appropriate sight-based Notice rolls and eliminates illumination penalties if in the appropriate mode. Changing modes is a free action.",
    strain: 1,
    cost: 10000,
    weight: 0,
    book: books_list[4],
    page: "p31"
  },
  {
    name: "Cybernetic Weapon, Melee",
    general: "Cyberware",
    class: "",
    type: "",
    limit: 2,
    description: "The character has retractable claws or blades attached directly to the bones in one forearm. The blades may be extended as a free and instant action, and cause Str+d6 damage. For additional cost these may be given any of the Close Combat Weapon Modifications found on page 18.",
    strain: 1,
    cost: 5000,
    weight: 0,
    book: books_list[4],
    page: "p31"
  },
  {
    name: "Cybernetic Weapon, Ranged",
    general: "Cyberware",
    class: "",
    type: "",
    limit: 2,
    description: "A small, concealed slugthrower or laser pistol has been installed in the character’s forearm. Reloading is achieved by removing a flap of fake skin and manually inserting individual rounds or batteries. Other small weapons may be installed with the GM’s approval.",
    strain: 1,
    cost: 5000, // + cost of weapon
    weight: 0,
    book: books_list[4],
    page: "p31"
  }
));
