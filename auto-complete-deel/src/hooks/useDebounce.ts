import { useEffect, useRef, useState } from "react";
import type { UseDebounceProps } from "../types";

export const useDebounce = ({value, delay}: UseDebounceProps) => {
    const [debouncedValue, setDebouncedValue] = useState("");
    const timerRef = useRef<NodeJS.Timeout | undefined>();

    useEffect(() => {
        timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [value, delay]);

    return debouncedValue;
};