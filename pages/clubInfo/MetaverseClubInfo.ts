import { Club } from "./ClubInfoBase";

let indentLevel = 2;
let spaces = ' '.repeat(indentLevel * 4);   // 空格
let warp = "\r";     // 换行
export const MetaverseClubData : Club = {
    
    mainTitle: "Metaverse Club",
    overview: `Explore programming languages and make code a magical wand for children`,
    impressionImage: "/metaverse-1.jpeg",
    promotionContent: `${spaces}The Metaverse Club offers this by crafting a virtual environment where children can enhance their foreign language listening and speaking skills seamlessly. 
${warp}${spaces}By integrating language practice into fun activities and hobbies, kids absorb new languages without even realizing it. 
${warp}${spaces}Just as immersion is key to mastering a language, the Metaverse Club provides a dynamic space that turns learning into an adventure. 
${warp}${spaces}Invest in your child's future—let them explore language in a world where education meets play.
`,
    firstExampleImage: "/metaverse-2.jpeg",
    secondExampleImage: "/metaverse.png",
    harvestTitle: "Harvests from the Metaverse Club",
    harvestContent: [  
        {  
            subheading: "Enhanced Language Fluency",  
            description: "Children will improve their foreign language listening and speaking skills in an immersive, virtual environment, leading to greater fluency."  
        },  
        {  
            subheading: "Effortless Learning",  
            description: "By integrating language practice into fun activities, kids absorb new languages naturally, making learning feel effortless and enjoyable."  
        },  
        {  
            subheading: "Immersive Experience",  
            description: "The Metaverse Club creates a dynamic space where children are fully immersed in a language-rich environment, accelerating their mastery through real-world-like interactions."  
        },  
        {  
            subheading: "Educational Adventure",  
            description: "Learning is transformed into an adventure, making language acquisition an exciting and engaging process rather than a chore."  
        },  
        {  
            subheading: "Future Readiness",  
            description: "Investing in this program equips children with crucial language skills that will benefit their future academic and professional endeavors."  
        }  
    ]
};