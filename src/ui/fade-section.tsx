"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeSectionProps {
    children: ReactNode;
}

const FadeSection: React.FC<FadeSectionProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

export default FadeSection;
