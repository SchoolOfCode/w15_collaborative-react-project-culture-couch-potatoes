import mona from "./objects/mona.jpg"
import boromir from "./objects/boromir.jpg"
import godzilla from "./objects/van_gough.jpg"
import squid from "./objects/squid.png"

let artworks = [
    {
        id: 1,
        size:[3,5],
        title: "Starry Night",
        author: "Van Gogh",
        year: "1887",
        text: "This is a painting of a starry night sky",
        image: mona,
        description: "The swallow may fly south with the sun, and the house martin or the plover may seek warmer climes in winter, yet these are not strangers to our land. Bloody Peasant! Where'd you get the coconuts? Ah, now we see the violence inherent in the system!"
    },
    {
        id: 2,
        size:[8,5],
        title: "Boromir's Advice",
        author: "Boris Becker",
        year: "1992",
        text: "Example 2 depicts an old man",
        image: boromir,
        description: "But I know you in the future. I cleaned your poop. Bender, this is Fry's decision… and he made it wrong. So it's time for us to interfere in his life. Professor, make a woman out of me. We need rest. The spirit is willing, but the flesh is spongy and bruised."
    },
    {
        id: 3,
        size:[5,5],
        title: "Old Man Squiddy",
        author: "Your sub-conscious",
        year: "now",
        text: "This is your brain right now",
        image: squid,
        description: "Camelot! I am your king. Well, she turned me into a newt. No, no, no! Yes, yes. A bit. But she's got a wart. The swallow may fly south with the sun, and the house martin or the plover may seek warmer climes in winter, yet these are not strangers to our land."

    },
    {
        id: 4,
        size:[7,5],
        title: "Buzzzzzzzzz",
        author: "Woody",
        year: "2011",
        text: "The Claaaaaaaw",
        image: godzilla,
        description: "Leave that to me. Send a distress signal, and inform the Senate that all on board were killed. Ye-ha! Hey, Luke! May the Force be with you. Don't underestimate the Force. Don't act so surprised, Your Highness. You weren't on any mercy mission this time. Several transmissions were beamed to this ship by Rebel spies. I want to know what happened to the plans they sent you."
    },
]

export default artworks