import { Club } from "./ClubInfoBase";

let indentLevel = 2;
let spaces = ' '.repeat(indentLevel * 4);   // 空格
let warp = "\r";     // 换行
export const LeadershipClubData : Club = {
    
    mainTitle: "Leadership Club",
    overview: `Explore programming languages and make code a magical wand for children`,
    impressionImage: "/leadership-1.jpeg",
    promotionContent: `${spaces}Founded by Tsinghua University's Professor Lu Xiangqian, the Leadership Club empowers students to innovate, start businesses, and expand their horizons. 
${warp}${spaces}We invite top entrepreneurs and innovators to share their success stories, offering firsthand insights into leadership across industries. 
${warp}${spaces}Our goal is to help you "talk with the king, gain a decade's wisdom." Through regular online salons, you'll stay informed on industry trends and refine your career direction. 
${warp}${spaces}Join us to cultivate the leadership skills essential for your future success.
`,
    firstExampleImage: "/image2.jpg",
    secondExampleImage: "/leadership-2.jpg",
    harvestTitle: "Harvests from the Leadership Club",
    harvestContent: [  
        {  
            subheading: "Entrepreneurial Skills",  
            description: "Learn how to innovate and start your own business, gaining the entrepreneurial skills needed to turn your ideas into successful ventures."  
        },  
        {  
            subheading: "Leadership Insights",  
            description: "Gain firsthand knowledge from top entrepreneurs and innovators, learning the leadership strategies that drive success across various industries."  
        },  
        {  
            subheading: "Expanded Horizons",  
            description: "Broaden your perspective by engaging with leaders from diverse fields, enhancing your ability to think critically and strategically."  
        },  
        {  
            subheading: "Career Guidance",  
            description: "Stay updated on industry trends through regular online salons, helping you clarify your career direction and make informed decisions about your future."  
        },  
        {  
            subheading: "Wisdom from Experience",  
            description: "Benefit from the club's unique approach of learning from seasoned professionals, aiming to equip you with knowledge equivalent to 'a decade's wisdom' in leadership and innovation."  
        }  
    ]
    
};