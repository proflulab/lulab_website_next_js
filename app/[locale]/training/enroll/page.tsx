'use client';

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function EnrollPage() {
    const t = useTranslations("Training.enroll");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // TODO: Implement form submission logic

        setTimeout(() => {
            setIsSubmitting(false);
            // TODO: Add success notification
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto"
                >
                    <h1 className="text-3xl font-bold text-center mb-8">
                        {t("title")}
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">{t("form.name")}</Label>
                            <Input
                                id="name"
                                name="name"
                                required
                                placeholder={t("form.namePlaceholder")}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">{t("form.email")}</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder={t("form.emailPlaceholder")}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">{t("form.phone")}</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                placeholder={t("form.phonePlaceholder")}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">{t("form.message")}</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder={t("form.messagePlaceholder")}
                                rows={4}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? t("form.submitting") : t("form.submit")}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}