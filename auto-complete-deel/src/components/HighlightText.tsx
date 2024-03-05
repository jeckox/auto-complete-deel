import React from "react";
import type { HighlightTextProps } from "../types";

export const HighlightText = ({text, highlight}: HighlightTextProps) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
        <span>
        {parts.map((part: string, index: number) => (
            <span
            key={index}
            style={
                part.toLowerCase() === highlight.toLowerCase()
                ? { fontWeight: "bold" }
                : {}
            }
            >
            {part}
            </span>
        ))}
        </span>
    );
}