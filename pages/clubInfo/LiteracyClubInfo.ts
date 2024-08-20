import { Club } from "./ClubInfoBase";

let indentLevel = 2;
let spaces = ' '.repeat(indentLevel * 4);   // 空格
let warp = "\r";     // 换行
export const LiteracyClubData : Club = {
    
    mainTitle: "DigitalLiteracy Club",
    overview: `Explore programming languages and make code a magical wand for children`,
    impressionImage: "/literacyClub-img1.jpeg",
    promotionContent: `${spaces}In a world increasingly driven by technology, the Digital Literacy Club is on a mission to elevate children's computer skills and digital literacy. This isn't just about learning to code; it's about demystifying technology and fostering a generation comfortable in the digital world.
${warp}${spaces}According to a 2023 report by the World Economic Forum, 65% of children entering primary school today will eventually work in jobs that do not yet exist. The Digital Literacy Club's curriculum positions children at the forefront of this shift, equipping them with the skills to navigate and shape an AI-driven future.
${warp}${spaces}Join us in supporting the Digital Literacy Club. Together, we can build a foundation for the next generation of innovators, ensuring they are well-prepared to thrive in the era of artificial intelligence.
 `,
    firstExampleImage: "/literacyClub-img2.png",
    secondExampleImage: "/literacyClub-img3.png",
    harvestTitle: "Harvests from the DigitalLiteracy Club",
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