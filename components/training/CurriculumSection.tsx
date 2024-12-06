import { useTranslations } from "next-intl";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Timeline } from "@/components/ui/timeline";

interface CurriculumSectionProps {
    curriculumKey?: string;
}

export function CurriculumSection({ curriculumKey = 'aiBasic' }: CurriculumSectionProps) {
    const t = useTranslations('Training');
    const weeks = ['week1', 'week2', 'week3', 'week4']; // 可以根据需要扩展周数

    // 动态生成时间线项目
    const timelineItems = weeks.map(week => {
        try {
            return {
                title: t(`curriculum.${curriculumKey}.timeline.${week}.title`),
                description: t(`curriculum.${curriculumKey}.timeline.${week}.description`),
                date: t(`curriculum.${curriculumKey}.timeline.${week}.date`),
            };
        } catch (error) {
            console.error(`Translation missing for week: ${week}`, error);
            return undefined;
        }
    }).filter((item): item is { title: string; description: string; date: string } => item !== undefined);

    return (
        <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
                {t('curriculum.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {weeks.map((week) => {
                        try {
                            const weekTitle = t(`curriculum.${curriculumKey}.${week}.title`);
                            const weekTopics = t(`curriculum.${curriculumKey}.${week}.topics`);
                            return (
                                <AccordionItem key={week} value={week}>
                                    <AccordionTrigger>{weekTitle}</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="list-disc pl-6 space-y-2">
                                            {weekTopics.split(",").map((topic, index) => (
                                                <li key={index} className="text-muted-foreground">
                                                    {topic.trim()}
                                                </li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        } catch {
                            return null; // 如果翻译不存在，跳过该周
                        }
                    })}
                </Accordion>

                <div className="relative">
                    <Timeline items={timelineItems} />
                </div>
            </div>
        </section>
    );
} 