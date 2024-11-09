export const RapLyrics = {
  sections: {
    'Verse 1': `Yo, listen up, got a story to tell
About BinBoss magic, it works so well
Dirty bins giving you the blues?
This is the product you gotta choose
Natural power, that's what we bring
Eucalyptus fresh, make your bin sing`,

    'Chorus': `BinBoss, BinBoss, cleaning up the game
No more nasty odors, no more shame
Spray it once, watch problems fade
Best cleaning product ever made`,

    'Verse 2': `Linen fresh scent, that's how we roll
Natural ingredients taking control
No harsh chemicals in our mix
Just pure power for a quick fix
Easy to use, spray and you're done
Making bin cleaning actually fun`,

    'Bridge': `(Break it down now!)
B-I-N to the B-O-S-S
When it comes to clean, we're never at a loss
Fresh and clean, that's our guarantee
The solution that you need to see`,

    'Verse 3': `One quick spray, watch it transform
This ain't your average cleaning norm
Long-lasting freshness, day after day
Keeping those funky odors away
Professional grade at your command
Best bin cleaner in the land`,

    'Outro': `So what you waiting for? Time to make that choice
Order BinBoss now, let your bin rejoice
Click that button, get it delivered to your door
Trust BinBoss to keep your bins fresh, that's what we're here for!`
  },
  get fullLyrics() {
    return Object.values(this.sections).join('\n\n');
  }
};