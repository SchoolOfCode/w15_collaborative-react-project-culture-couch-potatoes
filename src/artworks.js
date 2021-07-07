import mona from "./objects/mona.jpg"
import boromir from "./objects/boromir.jpg"
import godzilla from "./objects/van_gough.jpg"
import squid from "./objects/squid.png"
import Colossus from "./objects/Colossus.jpg"
import Nebra_Scheibe from "./objects/Nebra_Scheibe.jpg"
import alternatives from "./objects/alternatives.jpg"
import Tabula from "./objects/Tabula.jpg"


let artworks = [
    {
        id: 1,
        size:[3,5],
        title: "Modern Mona",
        author: "",
        year: "2021",
        text: "",
        image: mona,
        description: "",
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
        title: "Starry Night",
        author: "Van Gogh",
        year: "1887",
        text: "The Claaaaaaaw",
        image: godzilla,
        description: "The swallow may fly south with the sun, and the house martin or the plover may seek warmer climes in winter, yet these are not strangers to our land. Bloody Peasant! Where'd you get the coconuts? Ah, now we see the violence inherent in the system!."
    },
    {
        id: 5,
        size: [7,5],
        title: "Colossus Computer",
        author:"",
        year: "1943-1945",
        image: Colossus,
        description:"Colossus was a set of computers developed by British codebreakers in the years 1943–1945[1] to help in the cryptanalysis of the Lorenz cipher. Colossus used thermionic valves (vacuum tubes) to perform Boolean and counting operations. Colossus is thus regarded[2] as the world's first programmable, electronic, digital computer, although it was programmed by switches and plugs and not by a stored program. Colossus was designed by General Post Office (GPO) research telephone engineer Tommy Flowers[1] to solve a problem posed by mathematician Max Newman at the Government Code and Cypher School (GC&CS) at Bletchley Park.",
    },
    {   id: 6,
        size: [6,5],
        title:"Nebra Sky Disk",
        author:"",
        year:"1600 BCE" ,
        image: Nebra_Scheibe,
        description:"The Nebra sky disk is a bronze disk of around 30 centimetres (11+3⁄4 in) diameter and a weight of 2.2 kilograms (4.9 lb), having a blue-green patina and inlaid with gold symbols. The disk has been attributed to a site in present-day Germany near Nebra, Saxony-Anhalt, and was originally dated by archaeologists to c. 1600 BCE. Researchers initially suggested the disk is an artifact of the Bronze Age Unetice culture, although a later dating to the Iron Age has been proposed as well.The Nebra sky disk features the oldest concrete depiction of the cosmos yet known from anywhere in the world."
    },
    {
        id: 7,
        size: [7,4],
        title: "Tabula Rogeriana",
        author:"",
        year:"1154",
        image:Tabula,
        description:"The Excursion of One Who is Eager to Traverse the Regions of the World, commonly known in the West as the Tabula Rogeriana, is a description of the world and world map created by the Arab geographer Muhammad al-Idrisi in 1154. Al-Idrisi worked on the commentaries and illustrations of the map for fifteen years at the court of the Norman King Roger II of Sicily, who commissioned the work around 1138."
    },
    {
        id: 8,
        size: [4,5],
        title:"Alternatives",
        author: "Espen Kluge",
        year:"2019",
        image: alternatives,
        description:"The ‘alternatives’ is a portrait series consisting of 100 portraits generated in Javascript. The algorithm draws vectors based on data collected from photographs sourced online. The results are abstract portraits that tells stories alternative to their origins."
    },
    
]

export default artworks