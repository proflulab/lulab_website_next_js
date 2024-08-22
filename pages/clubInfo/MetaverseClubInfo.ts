import { Club } from "./ClubInfoBase";

let indentLevel = 2;
let spaces = ' '.repeat(indentLevel * 4);   // 空格
let warp = "\r";     // 换行
export const MetaverseClubData : Club = {
    
    mainTitle: "Metaverse Club",
    overview: `Explore programming languages and make code a magical wand for children`,
    impressionImage: "/literacyClub-img1.jpeg",
    promotionContent: `${spaces}The Metaverse Club offers this by crafting a virtual environment where children can enhance their foreign language listening and speaking skills seamlessly. 
${warp}${spaces}By integrating language practice into fun activities and hobbies, kids absorb new languages without even realizing it. 
${warp}${spaces}Just as immersion is key to mastering a language, the Metaverse Club provides a dynamic space that turns learning into an adventure. 
${warp}${spaces}Invest in your child's future—let them explore language in a world where education meets play.
`,
    firstExampleImage: "/literacyClub-img2.png",
    secondExampleImage: "/literacyClub-img3.png",
    harvestTitle: "Harvests from the Metaverse Club",
    harvestContent: [
        {
            subheading: "Master cutting-edge technological skills",
            description: "Children will delve into programming languages and master cutting-edge technical tools in the field of game development."
        },
        {
            subheading: "Cultivate problem-solving and innovation abilities",
            description: "Through case studies, children will learn to think independently and solve problems, while also stimulating their innovative thinking."
        },
        {
            subheading: "Teamwork and Leadership Enhancement",
            description: "In project practice, children will have the opportunity to lead a team or be a member of a team to jointly set goals and achieve them. This process will greatly enhance their teamwork skills."
        },
        {
            subheading: "Preparation for adapting to the future job market",
            description: "The club enables children to stand at the forefront of technological change in advance, and the skills they learn will better adapt to the needs of the future workplace."
        },
        {
            subheading: "Build confidence and a sense of achievement",
            description: "Children will see their own growth at every step from programming basics to project practice, greatly enhancing their confidence."
        }
    ]
};